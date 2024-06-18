import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsComponent } from './components/plants/plants.component';
import { SpecifcPlantsInCategoryComponent } from './components/specifc-plants-in-category/specifc-plants-in-category.component';
import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';
import { SignUpValidationComponent } from './sign-up-validation/sign-up-validation.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { UserComponent } from './user/user.component';
// import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';


const routes: Routes = [
  
  {
    path: 'home',
    component: PlantsComponent,
    //canActivate: [AuthGuardService]
  },
  {
    path: 'specific_plants_in_category/:category_id',
    component: SpecifcPlantsInCategoryComponent
  },
  {
    path: 'home/sign_up',
    component: SignUpValidationComponent
  },
  {
    //reactive form sign up
    path: 'home/sign_up_reactive',
    component: ReactiveSignupComponent
  },
  {
    path: 'home/login',
    component: LoginComponent
  },
  {
    path: 'home/users',
     component: UserComponent 

  },
  {
    path: 'home/users/:id',
     component: UserComponent

  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'   //full means exact match; prefix means as long as /home is in the URL it will redirect to home
  },
  {
    path: '**',
    component: NotfoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

