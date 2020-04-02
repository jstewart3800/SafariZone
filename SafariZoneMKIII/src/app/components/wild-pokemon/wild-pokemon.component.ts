import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokedexEntry } from 'src/app/interfaces/pokedex-entry';

@Component({
   selector: 'app-wild-pokemon',
   templateUrl: './wild-pokemon.component.html',
   styleUrls: ['./wild-pokemon.component.scss'],
})
export class WildPokemonComponent implements OnInit {

   private pokemonList: PokedexEntry[];

   public wildPokemonId;
   public wildPokemon: PokedexEntry;

   constructor(private pokedex: PokedexService) {
      this.pokemonList = pokedex.returnPokemon();
      console.log(this.pokemonList);
   }

   ngOnInit() {
      // this.rollWildPokemon();
   }

   rollWildPokemon() {
      this.wildPokemonId = Math.floor(Math.random() * 151) + 1;
      this.wildPokemon = this.pokemonList[this.wildPokemonId - 1]; // Runs too quickly to initialize with the page itself
      console.log(this.wildPokemon);
   }

}
