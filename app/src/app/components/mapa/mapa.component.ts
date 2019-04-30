import { Component, OnInit, Input } from '@angular/core';
import { ListaCarro } from 'src/app/models/ListaCarro';
import { FrotaService } from 'src/app/services/frotas/frota.service';

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

  public zoom: number;
  public flag = false;

  // Car location
  public car: ListaCarro;
  public flagCars = false;
  public carNumber = 1;

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

      setInterval(() => this.checkClient(), 2500);
    }
  }

  constructor(
    private serviceCar: FrotaService
  ) { }

  ngOnInit() {
    this.zoom = 11;
    this.flag = false;
    this.car = new ListaCarro('', '', '', '', '', '');

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
        console.log(res);
      });
  }
}
