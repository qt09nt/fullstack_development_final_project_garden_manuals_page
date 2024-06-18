import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidatePassword } from '../ValidatePassword';
import { PlantCategoriesService } from '../services/plant-categories.service'; 

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrl: './reactive-signup.component.css'
})

export class ReactiveSignupComponent {

  //formBuilder:FormBuilder = inject(FormBuilder);

  signUpForm: any;

  constructor(formBuilder: FormBuilder){
    this.signUpForm = formBuilder.group ({
      email: ['', [Validators.required, Validators.email]],
      
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), ValidatePassword]],
     });
  }

  
 
  // ngOnit()}{

  // }

  // signUpForm = new FormGroup({
  //   email: new FormControl ('', [Validators.required, Validators.email]),
  //   username: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6), ValidatePassword]),
  //  });
   
  //  submitForm(){
  //   if(this.signUpForm?.valid){
  //     console.log('Form Submission', this.signUpForm)
  //   }
  //  }

   plantCategoriesService: PlantCategoriesService = inject(PlantCategoriesService);

  signUp(form: any) {
    console.log(form);
    if (form.valid) {
      this.plantCategoriesService.signUp(form.form.value).subscribe((result: any) => {
        console.log(result);
      });
    }
  }
}
