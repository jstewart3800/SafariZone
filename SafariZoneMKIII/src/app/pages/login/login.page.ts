import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';
import { UserEmail } from 'src/app/interfaces/user-email';
import { ToastController } from '@ionic/angular';

@Component({
   selector: 'app-login',
   templateUrl: './login.page.html',
   styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



   public userLoggedIn: UserEmail = {
      id: 0,
      userEmail: ""
   }

   public loginForm: FormGroup;

   public submitAttempt = false;

   constructor(public formBuilder: FormBuilder, public router: Router, private pService: PokedexService, private toastCtrl: ToastController) {
      this.loginForm = formBuilder.group({
         emailAddress: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
         password: ['', Validators.compose([Validators.minLength(2), Validators.required])]
      });
   }

   ngOnInit() {
   }

   async presentToast(message: string) {
      const toast = await this.toastCtrl.create({
         message: message,
         position: 'top',
         cssClass: 'ion-text-center',
         duration: 2500
      });
      toast.present();
   }

   loginAttempt(id: string) {

      this.submitAttempt = true;
      

      if (!this.loginForm.valid) {
         this.presentToast('Invalid login'); // Toast
      } else {
         this.userLoggedIn.userEmail = id;
         this.pService.loggedInUser = this.userLoggedIn;

         this.presentToast(`Welcome, ${this.userLoggedIn.userEmail}`); // Toast
         this.pService.login(this.loginForm.value);
      }
   }
}
