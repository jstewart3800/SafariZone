import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
   selector: 'app-login',
   templateUrl: './login.page.html',
   styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   public loginForm: FormGroup;

   public submitAttempt = false;

   constructor(public formBuilder: FormBuilder) {
      this.loginForm = formBuilder.group({
         email: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
         password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
      });
   }

   ngOnInit() {
   }

   loginAttempt() {

      this.submitAttempt = true;

      if (!this.loginForm.valid) {
         console.log('invalid login');
      } else {
         console.log('success!');
         console.log(this.loginForm.value);
      }
   }

}
