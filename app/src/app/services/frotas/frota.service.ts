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
    this.url = 'http://localhost:3000';
  }

  listaCarros(): Observable<Array<ListaCarro>> {
    return this.http
      .get<Array<ListaCarro>>(`${this.url}/lista-carros`).pipe();
  }
}
