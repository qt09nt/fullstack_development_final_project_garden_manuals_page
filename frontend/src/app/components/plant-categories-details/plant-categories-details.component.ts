import { Component } from '@angular/core';
import { GetPlantCategoriesByIdService } from '../../get-plant-categories-by-id.service';

@Component({
  selector: 'app-plant-categories-details',
  templateUrl: './plant-categories-details.component.html',
  styleUrl: './plant-categories-details.component.css'
})

export class PlantCategoriesDetailsComponent {

  //create a property called plantCategoriesId
  GetPlantCategoriesByIdService: any;

  constructor(private _getPlantCategoriesId: GetPlantCategoriesByIdService) { }

  //function to get Plant Category ID
  getPlantCategoriesById(category_id: number) {
    this.GetPlantCategoriesByIdService.getPlantByCategory(category_id).subscribe((result:any) => {
      console.log(result)
    }); 
  }
}

