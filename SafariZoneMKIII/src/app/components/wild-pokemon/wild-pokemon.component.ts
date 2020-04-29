import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokedexEntry } from 'src/app/interfaces/pokedex-entry';
import { HttpClient } from '@angular/common/http';

@Component({
   selector: 'app-wild-pokemon',
   templateUrl: './wild-pokemon.component.html',
   styleUrls: ['./wild-pokemon.component.scss'],
})
export class WildPokemonComponent implements OnInit {

   public loggedInUserUrl = this.pokedex.apiUrl + `pokemoncaught/${this.pokedex.loggedInUser.userEmail}`;
   private userCaughtObj = {};
   public caughtPokemonUrl = this.pokedex.apiUrl + "pokemoncaught/update";

   private pokemonList: PokedexEntry[];

   public wildAppeared = false;

   public wildPokemonId;
   public wildPokemon: PokedexEntry;

   public catchChance = 50;
   public runChance = 50;

   constructor(private pokedex: PokedexService, private http: HttpClient) {
      this.pokemonList = pokedex.returnPokemon();
      console.log(this.pokemonList);
   }

   ngOnInit() {
      this.GetUserLog();
   }

   rollWildPokemon() {
      this.wildPokemonId = Math.floor(Math.random() * 151) + 1;
      this.wildPokemon = this.pokemonList[this.wildPokemonId - 1]; // Runs too quickly to initialize with the page itself
      console.log(this.wildPokemon);
      this.wildAppeared = true;
      console.log(this.wildAppeared);
   }

   runAway() {
      this.wildAppeared = false;
      this.runChance = 50;
      this.catchChance = 50;
   }

   throwBait() {
      if (this.runChance > 20) {
         this.runChance = this.runChance + 10;
         this.catchChance = this.catchChance + 10;
      } else {
         console.log('The pokemon is already eating.')
      }
      this.pokemonTurn();
   }

   throwRock() {
      if (this.catchChance > 20) {
         this.catchChance = this.catchChance - 10;
         this.runChance = this.runChance - 10;
      } else {
         console.log("You already have the pokemon's attention.")
      }
      this.pokemonTurn();
   }

   throwBall() {
      // create logic to descern catch success/ fail
      let catchRoll = Math.floor(Math.random() * 100) + 1;
      //success - call api function to update user's pokemonCaught
      if (catchRoll >= this.catchChance) {
         console.log("You got 'em!"); // Toast
         this.GetUserLog();
         var wildPokemon2 = this.wildPokemon.pokemon.toLowerCase();
         this.userCaughtObj[wildPokemon2] = true;
         console.log(this.userCaughtObj);
         this.caughtPokemon(this.userCaughtObj);
      } else {
         // fail - pokemon's turn
         console.log('Rats! It broke free!'); // Toast
         this.pokemonTurn();
      }
   }

   pokemonTurn() {
      // roll %
      let runRoll = Math.floor(Math.random() * 100) + 1;
      console.log(runRoll);
      console.log(this.runChance);
      // if roll is higher than runChance, pokemon runs away
      if (runRoll >= this.runChance) {
         console.log('The pokemon fled!'); // Toast
         this.runAway();
      }
   }

   GetUserLog() {
      this.http.get(this.loggedInUserUrl).subscribe(l => {
         console.log(this.loggedInUserUrl);
         console.log(l);
         this.userCaughtObj = l;
      })
   }

   caughtPokemon(updatedUserLog) {
      this.http.post(this.caughtPokemonUrl, updatedUserLog).subscribe( u => console.log(updatedUserLog))
   }
}
