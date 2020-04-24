import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
   selector: 'app-signup',
   templateUrl: './signup.page.html',
   styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

   public signupForm: FormGroup;

   public submitAttempt = false;

   constructor(public formBuilder: FormBuilder) {
      this.signupForm = formBuilder.group({
         email: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
         password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
         confirm: ['', Validators.required]
      })
   }

   ngOnInit() {
   }

   signupAttempt(password, confirm) {
      if (password !== confirm) { 
         console.log('password does not match'); // Toast
         console.log(password, confirm);
      } else if (!this.signupForm.valid) {
         console.log('invalid inputs'); //Toast
      } else {
         console.log('success!'); // send info to api to make new user
         console.log(this.signupForm.value);
      }
   }
}
