import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsComponent } from './components/plants/plants.component';
import { SpecifcPlantsInCategoryComponent } from './components/specifc-plants-in-category/specifc-plants-in-category.component';


const routes: Routes = [
  {
    path: 'plant_categories',
    component: PlantsComponent
  },
  {
    
    path: 'specific_plants_in_category/:id',
    component: SpecifcPlantsInCategoryComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

