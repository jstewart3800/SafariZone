import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokedexEntry } from 'src/app/interfaces/pokedex-entry';

@Component({
   selector: 'app-log',
   templateUrl: './log.component.html',
   styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

   private pokedexEntryList: PokedexEntry[] = this.pokedex.pokedexEntryList;

   constructor(private pokedex: PokedexService) {
      pokedex.getPokemon();
   }

   ngOnInit() { }


}
