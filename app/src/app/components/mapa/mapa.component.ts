import { Component, OnInit, Input, Inject } from '@angular/core';
import { ListaCarro } from 'src/app/models/ListaCarro';
import { FrotaService } from 'src/app/services/frotas/frota.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  // Final location
  public lat: number;
  public lng: number;

  // User location
  public latitude: number;
  public longitude: number;
  public flagUser = true;

  public zoom: number;
  public flag = false;

  // Car location
  public car: ListaCarro;
  public flagCars = false;
  public carNumber = 1;

  // Trabel
  public distancia;
  public movingFlag = false;

  @Input('setLat')
  set setLat(value: number) {
    if (value !== null) {
      this.flag = true;
      this.lat = value;
    }
  }

  @Input('setLng')
  set setLng(value) {
    this.lng = value;
  }

  @Input('setCarros')
  set setCarros(value) {
    if (value !== null) {
      this.flagCars = true;
      this.car = value;
      this.car.latitude = '-23.574165';
      this.car.longitude = '-23.574165';
      this.carNumber = Math.floor(Math.random() * (4 - 1)) + 1;

      this.checkTravel(this.latitude, this.longitude);

      this.movingFlag = false;
      this.checkClient();
    }
  }

  constructor(
    private serviceCar: FrotaService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.zoom = 12;
    this.flag = false;
    this.car = new ListaCarro('', '', '', '', '', '');

    // User position (FIAP)
    this.latitude = -23.574165;
    this.longitude = -46.654404;

    // Distance
    this.distancia = 0;

    navigator.geolocation.getCurrentPosition(pos => this.getUserPosition(pos));
  }

  public getUserPosition(position: Position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }

  public checkTravel(lat, long) {
    this.serviceCar.getTravel(this.car.latitude, this.car.longitude, lat, long)
      .subscribe(res => {
        console.log(res);
      });
  }

  public checkClient() {
    this.serviceCar.getClient(this.latitude, this.longitude)
      .subscribe(res => {
        this.distancia = Number(res.distancia.toString()[0]);
        if (this.distancia < 1 || this.distancia === NaN) {
          this.distancia = 1;
        }

        this.openDialog(`O carro está a ${this.distancia}km de distância!`);
      });
  }

  public openDialog(message): void {
    const dialogRef = this.dialog.open(AppMapDialogComponent, {
      width: '300px',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(res => { this.carMoving(); });
  }

  public carMoving(): void {
    setTimeout(() => {
      let msg;
      if (this.movingFlag === true) {
        msg = 'Você chegou ao seu destino!';
        this.car.latitude = this.lat.toString();
        this.car.longitude = this.lng.toString();
        this.movingFlag = null;
        this.flagUser = true;
        this.flag = false;
        this.flagCars = false;

        this.latitude = this.lat;
        this.longitude = this.lng;
        this.openDialog(msg);
      } else if (this.movingFlag === false) {
        msg = 'O seu motorista acabou de chegar!';
        this.movingFlag = true;
        this.flagUser = false;
        this.car.latitude = this.latitude.toString();
        this.car.longitude = this.longitude.toString();
        this.openDialog(msg);
      }

    }, (this.distancia * 1000));
  }
}

@Component({
  selector: 'app-map-dialog',
  templateUrl: './dialog-map.html'
})
export class AppMapDialogComponent {
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<MapaComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.message = data.message;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
