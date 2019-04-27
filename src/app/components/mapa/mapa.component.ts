import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  public lat: number;
  public lng: number;
  public zoom: number;
  public flag = false;

  @Input('setLat')
  set setLat(value: number) {
    console.log(value);
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
  }

}
