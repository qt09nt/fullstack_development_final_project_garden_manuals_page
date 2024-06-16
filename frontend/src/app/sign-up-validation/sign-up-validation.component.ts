import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-validation',
  templateUrl: './sign-up-validation.component.html',
  styleUrl: './sign-up-validation.component.css'
})
export class SignUpValidationComponent {

  passwordCheck: any;
// signUpDetails: any;
// onSubmit(_t6: NgForm) {
// throw new Error('Method not implemented.');


  signUpDetails = {
    email:'',
    username:'',
    password:'',   
  }
isSubmit: any;

  
  onSubmit(form:any){
    if(form.valid){
      console.log('Form', form);
    }
  }



}
// test: any;
// passwordCheck: any;
//   onSubmit(_t6: NgForm) {
//   throw new Error('Method not implemented.');




 //to show what's submitted by the form in console:
 //it will show up under directive.value
  //  
  // }
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