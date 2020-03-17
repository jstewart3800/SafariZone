import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
     providedIn: 'root'
})
export class PokedexService {
     private pokemonUrl = 'https://spreadsheets.google.com/feeds/list/1cMgd1ABRtTlwTstgGwEf563_ZTfZhLBCPJqvpl0ysTY/1/public/full?alt=json';
     
     private pokeDataSheet;

     constructor(private http: HttpClient) {}

     getPokemon() {
          this.pokeDataSheet = this.http.get(this.pokemonUrl);
          this.pokeDataSheet.subscribe(
               x => {
                    console.log(x);
               }
          )
     }
}

