import { Component } from '@angular/core';
import { PlantCategoriesService } from '../../services/plant-categories.service';
import { Iplantcategories } from '../../interfaces/iplantcategories';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css',  
})


export class PlantsComponent {

  //! used to silence the error message
  plantCategories!: Iplantcategories[];

  constructor(private plantCategoriesService: PlantCategoriesService ){
    this.plantCategoriesService.getPlantCategories().subscribe((result) => {
      this.plantCategories = result;
      console.log(result)
    }); 
  }

  getPlantCategoriesById(category_id: number){
    this.plantCategoriesService.getPlantCategoriesById(category_id).subscribe((result:any) => {
      console.log('Plant Category ==== ', result);
    })
  }

}
