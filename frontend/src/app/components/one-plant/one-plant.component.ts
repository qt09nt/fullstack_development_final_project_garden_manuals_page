import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PlantCategoriesService } from '../../services/plant-categories.service';


@Component({
  selector: 'app-one-plant',
  templateUrl: './one-plant.component.html',
  styleUrl: './one-plant.component.css'
})
export class OnePlantComponent {

  // //create a function to get the id from the URL
  // constructor(private route: ActivatedRoute, private plantCategoriesService: PlantCategoriesService){

    
  //   this.route.paramMap.subscribe(params => {
  //     let plant_id = params.get('plant_id');
  //     console.log('this is the plant id ', plant_id);
     
  //     // if (plant_id){
  //     //   this.plantCategoriesService.getPlantById(plant_id).subscribe((result:any) => {
             
  //     }

  //   }
}
