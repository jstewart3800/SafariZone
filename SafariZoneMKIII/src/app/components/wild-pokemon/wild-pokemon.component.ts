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

   public wildAppeared = false;

   public wildPokemonId;
   public wildPokemon: PokedexEntry;

   public

   constructor(private pokedex: PokedexService) {
      this.pokemonList = pokedex.returnPokemon();
      console.log(this.pokemonList);
   }

   ngOnInit() {}

   rollWildPokemon() {
      this.wildPokemonId = Math.floor(Math.random() * 151) + 1;
      this.wildPokemon = this.pokemonList[this.wildPokemonId - 1]; // Runs too quickly to initialize with the page itself
      console.log(this.wildPokemon);
      this.wildAppeared = true;
      console.log(this.wildAppeared);
   }

   runAway() {
      this.wildAppeared = false;
   }

   throwBait() {

   }

   throwRock() {

   }

   throwBall() {
      // create logic to descern catch success/ fail
      //success - call api function to update user's pokemonCaught
      // fail - pokemon's turn
   }

}
