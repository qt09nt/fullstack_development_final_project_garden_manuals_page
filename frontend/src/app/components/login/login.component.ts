import { Component, inject } from '@angular/core';
import { PlantCategoriesService } from '../../services/plant-categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  plantCategoriesService: PlantCategoriesService = inject (PlantCategoriesService);
  router: Router = inject(Router);

  signInDetails = {
    username: '',
    password: '',
  }
  
  signIn(form:any){
    console.log(form);
    if(form.form.valid){
      this.plantCategoriesService.signIn(form.form.value).subscribe((result:any) => {        
        localStorage.setItem('token', result);
        this.router.navigate(['home']);
      })
    }
  }

}
