import { Component, OnInit } from '@angular/core';

import { PokedexService } from 'src/app/services/pokedex.service';
import { PokedexEntry } from 'src/app/interfaces/pokedex-entry';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
   selector: 'app-log',
   templateUrl: './log.component.html',
   styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

   private logList: PokedexEntry[];

   constructor(private pokedex: PokedexService, public modalCtrl: ModalController) {
      this.logList = pokedex.returnPokemon();
      console.log(this.logList);
   }

   ngOnInit() { }

   async presentModal(pokeSelected: PokedexEntry) {
      console.log(pokeSelected);
      const modal = await this.modalCtrl.create({
         component: ModalComponent,
         componentProps: { // an object where each key in the object maps to an input of an associated component
            pokeData: pokeSelected.gender
         }
      });
      await modal.present();
   }

}
