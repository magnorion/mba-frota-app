import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeolocationModel } from 'src/app/models/GeolocationModel';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizationService {
  private key = '7f8ba45f2a4e4a089a71f51f96d70a60';
  private url = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(
    private http: HttpClient
  ) { }

  public getLatLng(location: string): Observable<GeolocationModel> {
    return this.http.get<GeolocationModel>(this.url, {params: {q: location, key: this.key}});
  }
}
