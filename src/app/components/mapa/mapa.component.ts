import { Component, OnInit, Input } from '@angular/core';

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

  @Input('setLat')
  set setLat(value: number) {
    if (value !== undefined) {
      this.flag = true;
    }
    this.lat = value;
  }

  @Input('setLng')
  set setLng(value) {
    this.lng = value;
  }

  constructor() { }

  ngOnInit() {
    this.zoom = 12;
    this.flag = false;

    navigator.geolocation.getCurrentPosition(pos => this.getUserPosition(pos));
  }

  public getUserPosition(position: Position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }
}
