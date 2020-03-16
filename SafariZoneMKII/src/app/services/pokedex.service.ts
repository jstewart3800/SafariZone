import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

     private pokeDataSheet;

  constructor(private http: HttpClient) { }

  getPokemon() {
     // this.pokeDataSheet = this.http.get(); Need sheet url
  }
}

