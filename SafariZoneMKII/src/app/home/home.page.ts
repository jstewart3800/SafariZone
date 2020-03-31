import { Component } from '@angular/core';

import { PokedexService } from '../services/pokedex.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { PokedexEntry } from '../interfaces/pokedex-entry';

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage {

   private logList: PokedexEntry[];

   constructor(private pokedex: PokedexService, public modalController: ModalController) {
      this.logList = pokedex.returnPokemon();
      console.log(this.logList);
   }

   async presentModal(pokeSelected: PokedexEntry) {
      console.log(pokeSelected);
      const modal = await this.modalController.create({
         component: ModalComponent,
         componentProps: { // an object where each key in the object maps to an input of an associated component
            pokeData: pokeSelected.gender
         }
      });
      await modal.present();
   }
}
