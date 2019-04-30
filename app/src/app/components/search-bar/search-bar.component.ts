import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GeolocalizationService } from 'src/app/services/geolocalization/geolocalization.service';
import { GeolocationModel } from 'src/app/models/GeolocationModel';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public search: string;

  @Output() sender = new EventEmitter();

  constructor(
    private service: GeolocalizationService
  ) { }

  ngOnInit() {
  }

  public searchLatLng(event): void {
    event.preventDefault();
    if (this.search !== '') {
      this.service.getLatLng(this.search)
        .subscribe(res => this.sendGeometry(res.results[0].geometry));
    }
  }

  public searchByEnter(event): void {
    if (event.keyCode === 13) {
      this.searchLatLng(event);
    }
  }

  sendGeometry(location: GeolocationModel) {
    this.sender.emit(location);
  }
}
