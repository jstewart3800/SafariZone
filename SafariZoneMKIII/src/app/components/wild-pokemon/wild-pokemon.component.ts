import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokedexEntry } from 'src/app/interfaces/pokedex-entry';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

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

   private pokeTurn = false;

   private animName = '';

   constructor(private pokedex: PokedexService, private http: HttpClient, private toastCtrl: ToastController) {
      this.pokemonList = pokedex.returnPokemon();
      console.log(this.pokemonList);
   }

   ngOnInit() {
      this.GetUserLog();
   }

   async presentToast(message: string) {
      const toast = await this.toastCtrl.create({
         message: message,
         position: 'top',
         cssClass: 'ion-text-center',
         duration: 3000
      });
      toast.present();
   }

   rollWildPokemon() {
      this.wildPokemonId = Math.floor(Math.random() * 151) + 1;
      this.wildPokemon = this.pokemonList[this.wildPokemonId - 1]; // Runs too quickly to initialize with the page itself
      this.presentToast(`A wild ${this.wildPokemon.pokemon} appeared!`);
      this.wildAppeared = true;
      console.log(this.wildAppeared);
   }

   runAway() {
      this.wildAppeared = false;
      this.runChance = 50;
      this.catchChance = 50;
      this.presentToast("You fled succesfully")
   }

   pokeRun() {
      this.wildAppeared = false;
      this.runChance = 50;
      this.catchChance = 50;
   }

   throwBait() {
      this.pokeTurn = true;
      this.animName = 'floater';
      if (this.runChance < 80) {
         this.runChance = this.runChance + 10;
         this.catchChance = this.catchChance + 10;
         this.presentToast(`Wild ${this.wildPokemon.pokemon} sniffs at the bait with interest.`)
      } else {
         this.presentToast(`Wild ${this.wildPokemon.pokemon} is already eating.`)
      }
      setTimeout(() => {
         this.pokemonTurn();
      }, 3000);
   }

   throwRock() {
      this.pokeTurn = true;
      this.animName = 'shake';
      if (this.catchChance > 20) {
         this.catchChance = this.catchChance - 10;
         this.runChance = this.runChance - 10;
         this.presentToast(`Wild ${this.wildPokemon.pokemon} is weakened. It's looking skittish`)
      } else {
         this.presentToast(`You already have wild ${this.wildPokemon.pokemon}'s attention.`)
      }
      setTimeout(() => {
         this.pokemonTurn();
      }, 3000);
   }

   throwBall() {
      this.pokeTurn = true;
      // create logic to descern catch success/ fail
      let catchRoll = Math.floor(Math.random() * 100) + 1;
      //success - call api function to update user's pokemonCaught
      if (catchRoll >= this.catchChance) {
         this.presentToast("You got 'em!"); // Toast
         this.GetUserLog();
         var wildPokemon2 = this.wildPokemon.pokemon.toLowerCase();
         this.userCaughtObj[wildPokemon2] = true;
         this.caughtPokemon(this.userCaughtObj);
         this.wildAppeared = false;
         this.pokeTurn = false;
      } else {
         // fail - pokemon's turn
         this.presentToast(`Rats! Wild ${this.wildPokemon.pokemon} broke free!`); // Toast
         setTimeout(() => {
            this.pokemonTurn();
         }, 3000);
      }
   }

   pokemonTurn() {
      // roll %
      let runRoll = Math.floor(Math.random() * 100) + 1;
      // if roll is higher than runChance, pokemon runs away
      if (runRoll >= this.runChance) {
         this.presentToast(`Wild ${this.wildPokemon.pokemon} fled!`); // Toast
         this.pokeRun();
      } else if (this.catchChance === 50) {
         this.presentToast(`Wild ${this.wildPokemon.pokemon} watches its surroundings intently.`)
      } else if (this.catchChance > 50) {
         this.presentToast(`Wild ${this.wildPokemon.pokemon} chews at the bait.`)
      } else {
         this.presentToast(`Wild ${this.wildPokemon.pokemon} searches for the source of the rock. It looks ready to bolt.`)
      }
      this.animName = '';
      this.pokeTurn = false;
   }

   GetUserLog() {
      this.http.get(this.loggedInUserUrl).subscribe(l => {
         this.userCaughtObj = l;
      })
   }

   caughtPokemon(updatedUserLog) {
      this.http.post(this.caughtPokemonUrl, updatedUserLog).subscribe(u => console.log(updatedUserLog))
   }
}
