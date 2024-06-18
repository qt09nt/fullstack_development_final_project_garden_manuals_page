import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlantCategoriesService } from '../services/plant-categories.service'; 

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
    confirm_password:'',  
  }

isSubmit: any;

  //authService: AuthdataService = inject(AuthdataService);
  plantCategoriesService: PlantCategoriesService = inject(PlantCategoriesService);

  signUp(form: any) {
    console.log(form);
    if (form.valid) {
      this.plantCategoriesService.signUp(form.form.value).subscribe((result: any) => {
        console.log(result);
      });
    }

  // }

  // onSubmit(form:any){
  //   console.log('HERE');
  //   if(form.valid){
  //     console.log('Form', form);

      //get the form email, password and username value and run the POST request for new
      // form.email 

    
      
    }
 }

  

//}
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
