import { Component } from '@angular/core';
import { GeometryModel } from './models/GeometryModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public lat: number;
  public lng: number;

  searchResult(location: GeometryModel): void {
    this.lat = location.lat;
    this.lng = location.lng;
  }
}
