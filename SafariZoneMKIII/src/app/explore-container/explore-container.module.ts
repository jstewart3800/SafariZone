import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { WildPokemonComponent } from '../components/wild-pokemon/wild-pokemon.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, WildPokemonComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
