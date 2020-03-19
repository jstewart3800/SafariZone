import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { WildPokemonComponent } from '../components/wild-pokemon/wild-pokemon.component';
import { LogComponent } from '../components/log/log.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, WildPokemonComponent, LogComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
