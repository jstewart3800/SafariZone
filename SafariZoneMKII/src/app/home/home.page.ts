import { Component } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage {

   private logList;

   constructor(private pokedex: PokedexService, public modalController: ModalController) {
      this.logList = pokedex.returnPokemon();
      console.log(this.logList);
   }

   async presentModal() {
      const modal = await this.modalController.create({
         component: ModalPage
      });
      return await modal.present();
   }
}
