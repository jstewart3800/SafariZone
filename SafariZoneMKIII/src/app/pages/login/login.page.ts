import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.page.html',
   styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   public loginForm: FormGroup;

   public submitAttempt = false;

   constructor(public formBuilder: FormBuilder, public router: Router, private pService: PokedexService) {
      this.loginForm = formBuilder.group({
         email: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
         password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
      });
   }

   ngOnInit() {
   }

   loginAttempt() {

      this.submitAttempt = true;

      if (!this.loginForm.valid) { // check db to see if login is valid
         alert('invalid login'); // Toast
      } else {
         console.log('success!'); // user is now logged in
         console.log(this.loginForm.value);
         this.router.navigate(['tabs']);
      }
   }

}
