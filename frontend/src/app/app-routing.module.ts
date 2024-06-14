import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsComponent } from './components/plants/plants.component';
import { SpecifcPlantsInCategoryComponent } from './components/specifc-plants-in-category/specifc-plants-in-category.component';
import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';
import { SignUpValidationComponent } from './sign-up-validation/sign-up-validation.component';
// import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';


const routes: Routes = [
  {
    path: 'home',
    component: PlantsComponent
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
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
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

