import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaCarro } from 'src/app/models/ListaCarro';
import { Observable } from 'rxjs';
import { Travel } from 'src/app/models/Travel';

@Injectable({
  providedIn: 'root'
})
export class FrotaService {
  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:3000';
  }

  listaCarros(): Observable<Array<ListaCarro>> {
    return this.http
      .get<Array<ListaCarro>>(`${this.url}/lista-carros`).pipe();
  }

  getTravel(latClient, longClient, latTravel, longTravel): Observable<Travel> {
    return this.http
      .get<Travel>(`${this.url}/travel`,
      { params: {
        latitudeCliente: latClient,
        longitudeCliente: longClient,
        latitudeViagem: latTravel,
        longitudeViagem: longTravel
      }}).pipe();
  }

  getClient(latClient, longClient): Observable<Travel> {
    return this.http
      .get<Travel>(`${this.url}/buscar-cliente`,
      { params: {
        latitudeCliente: latClient,
        longitudeCliente: longClient
      }}).pipe();
  }
}
