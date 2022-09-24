import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PrimerServicioService {
  uri = 'https://rickandmortyapi.com/api/character';


  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(this.uri);
  }

  public getById(id: number) {
    return this.http.get(`${this.uri}/${id}`);
  }

}
