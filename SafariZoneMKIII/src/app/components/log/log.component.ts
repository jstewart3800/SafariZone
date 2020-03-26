import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokedexEntry } from 'src/app/interfaces/pokedex-entry';

@Component({
   selector: 'app-log',
   templateUrl: './log.component.html',
   styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

   private logList;

   constructor(private pokedex: PokedexService) {
      this.logList = pokedex.returnPokemon();
      console.log(this.logList);
   }

   ngOnInit() { }


}
