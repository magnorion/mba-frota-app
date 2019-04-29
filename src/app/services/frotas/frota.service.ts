import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaCarro } from 'src/app/models/ListaCarro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrotaService {
  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://frota-v2-api.herokuapp.com/frotasV2';
  }

  listaCarros(): Observable<Array<ListaCarro>> {
    const header = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    return this.http
      .get<Array<ListaCarro>>(`${this.url}/listaCarros`, {headers: header}).pipe();
  }
}
