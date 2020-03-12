import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HeaderComponent } from '../views/header/header.component';
// import { LogPageModule } from '../pages/log/log.module';
// import { LogPage } from '../pages/log/log.page';

@NgModule({
     imports: [
          CommonModule,
          FormsModule,
          IonicModule,
          RouterModule.forChild([
               {
                    path: '',
                    component: HomePage
               },
               {
                    path: 'log',
                    loadChildren: () => import('../pages/log/log.module').then(m => m.LogPageModule)
               }
          ])
     ],
     declarations: [HomePage, HeaderComponent] //Don't forget to declare the header on each module you need it
})
export class HomePageModule { }
