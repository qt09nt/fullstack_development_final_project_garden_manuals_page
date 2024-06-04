import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-validation',
  templateUrl: './sign-up-validation.component.html',
  styleUrl: './sign-up-validation.component.css'
})
export class SignUpValidationComponent {

  signUpDetails ={
    email:'',
    username:'',
    password:''
  }
}
