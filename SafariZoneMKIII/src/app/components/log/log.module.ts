import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalModule } from './modal/modal.module';

import { LogComponent } from './log.component';

@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalModule
  ]
})
export class LogModule { }
