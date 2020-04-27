import { Component, OnInit } from '@angular/core';

import { PokedexService } from 'src/app/services/pokedex.service';
import { PokedexEntry } from 'src/app/interfaces/pokedex-entry';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { CaughtLog } from 'src/app/interfaces/caught-log';

@Component({
   selector: 'app-log',
   templateUrl: './log.component.html',
   styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

   private userCaughtList;

   private logList: PokedexEntry[];

   public loggedInUserUrl = this.pokedex.apiUrl + `pokemoncaught/${this.pokedex.loggedInUser.userEmail}`;

   constructor(private pokedex: PokedexService, public modalCtrl: ModalController, private http: HttpClient) {
      this.logList = pokedex.returnPokemon();
      console.log(this.logList);
   }

   ngOnInit() {
      this.GetUserLog();
   }

   async presentModal(pokeSelected: PokedexEntry) {
      console.log(pokeSelected);
      const modal = await this.modalCtrl.create({
         component: ModalComponent,
         componentProps: { // an object where each key in the object maps to an input of an associated component
            entryNum: pokeSelected.dexNum,
            entryName: pokeSelected.pokemon,
            entryHp: pokeSelected.hp,
            entryAtk: pokeSelected.atk,
            entryDef: pokeSelected.def,
            entrySpecAtk: pokeSelected.satk,
            entrySpecDef: pokeSelected.sdef,
            entrySpd: pokeSelected.spd,
            entryType: pokeSelected.type,
            entryAbility1: pokeSelected.ability1,
            entryAbility2: pokeSelected.ability2,
            entryEVWorth: pokeSelected.EVWorth,
            entryGender: pokeSelected.gender,
            entryEvolvesFrom: pokeSelected.evolvesFrom,
            entryEvolvesBy: pokeSelected.evolvesBy,
            entryEvolvesTo: pokeSelected.evolvesTo,
            entryDesc: pokeSelected.description,
         }
      });
      await modal.present();
   }

   GetUserLog() {
      this.http.get(this.loggedInUserUrl).subscribe(l => {
         console.log(this.loggedInUserUrl);
         console.log(l);
         this.userCaughtList = l;
         console.log(this.userCaughtList);
      })
   }


}
