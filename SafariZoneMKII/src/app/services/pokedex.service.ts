import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokedexEntry } from '../interfaces/pokedex-entry';

@Injectable({
   providedIn: 'root'
})
export class PokedexService {
   private pokemonUrl = 'https://spreadsheets.google.com/feeds/list/1cMgd1ABRtTlwTstgGwEf563_ZTfZhLBCPJqvpl0ysTY/1/public/full?alt=json';

   private pokeDataSheet;

   private pokedexEntryList: PokedexEntry[] = [];

   constructor(private http: HttpClient) {
      this.getPokemon();
   }

   getPokemon() {
      this.pokeDataSheet = this.http.get(this.pokemonUrl);
      this.pokeDataSheet.subscribe(
         x => {
            console.log(x);
            for (let p of x.feed.entry) {
               let nextPokemon: PokedexEntry = {
                  dexNum: p.gsx$dexnum.$t,
                  pokemon: p.gsx$pokemon.$t,
                  hp: p.gsx$hp.$t,
                  atk: p.gsx$atk.$t,
                  def: p.gsx$def.$t,
                  satk: p.gsx$sa.$t,
                  sdef: p.gsx$sd.$t,
                  spd: p.gsx$spd.$t,
                  type: p.gsx$type1.$t,
                  ability1: p.gsx$ability1.$t,
                  ability2: p.gsx$ability2.$t,
                  EVWorth: p.gsx$evworth.$t,
                  gender: p.gsx$gender.$t,
                  evolvesFrom: p.gsx$evolvesfrom.$t,
                  evolvesBy: p.gsx$evolvesby.$t,
                  evolvesTo: p.gsx$evolvesto.$t,
                  discovered: p.gsx$discovered.$t,
                  description: p.gsx$description.$t,
               }
               this.pokedexEntryList.push(nextPokemon);
            }
            console.log(this.pokedexEntryList);
         }
      )
   }

   returnPokemon() {
      return this.pokedexEntryList;
   }
}