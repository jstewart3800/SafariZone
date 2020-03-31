import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalModule } from './modal/modal.module';

import { LogComponent } from './log.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalModule
  ],
  entryComponents: [ModalComponent]
})
export class LogModule { }
