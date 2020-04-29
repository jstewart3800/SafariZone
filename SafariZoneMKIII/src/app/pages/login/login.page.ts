import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';
import { UserEmail } from 'src/app/interfaces/user-email';

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

   constructor(public formBuilder: FormBuilder, public router: Router, private pService: PokedexService) {
      this.loginForm = formBuilder.group({
         emailAddress: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
         password: ['', Validators.compose([Validators.minLength(2), Validators.required])]
      });
   }

   ngOnInit() {
   }

   loginAttempt(id: string) {

      this.submitAttempt = true;

      if (!this.loginForm.valid) {
         alert('invalid login'); // Toast
      } else {
         this.userLoggedIn.userEmail = id;
         this.pService.loggedInUser = this.userLoggedIn;

         console.log('success!'); // Toast
         this.pService.login(this.loginForm.value);
      }
   }
}
