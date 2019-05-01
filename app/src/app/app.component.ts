import { Component, OnInit, Inject } from '@angular/core';
import { GeometryModel } from './models/GeometryModel';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ListaCarro } from './models/ListaCarro';
import { FrotaService } from './services/frotas/frota.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public lat: number;
  public lng: number;

  public carros: Array<ListaCarro>;
  public carro: ListaCarro;

  constructor(
    public dialog: MatDialog,
    private frotaService: FrotaService
  ) { }

  ngOnInit() {
    this.carros = [new ListaCarro('', '', '', '', '', '')];
    this.carro = null;
    this.getCars();
  }

  searchResult(location: GeometryModel): void {
    this.lat = location.lat;
    this.lng = location.lng;

    this.openDialog();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AppDialogComponent, {
      width: '300px',
      data: {carros: this.carros}
    });

    dialogRef.afterClosed().subscribe(res => {
      try {
        this.carro = res
      } catch (err) {
        return null;
      }
    });
  }

  public getCars(): void {
    this.frotaService.listaCarros()
      .subscribe(res => this.carros =
        res.filter(arr => (arr.status !== 'ocupado' &&
        (arr.latitude !== null && arr.longitude !== null))));
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-app.html'
})
export class AppDialogComponent {
  public select: ListaCarro;

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.select = null;
  }

  public selectCar(car: ListaCarro): void {
    this.select = car;
    this.onNoClick(this.select);
  }

  onNoClick(car: ListaCarro = null): void {
    this.dialogRef.close(car);
  }
}
