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

// getter methods for form controls
// get nameFormControl(){
//   return this.studentForm.get('name')!; //return the name form control
// }

// get emailFormControl(){
//   return this.studentForm.get('email')!; //return the email form control
// }

// get phoneFormControl(){
//   return this.studentForm.get('phone_number')!; //return the name form control
// }