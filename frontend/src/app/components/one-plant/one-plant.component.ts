import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PlantCategoriesService } from '../../services/plant-categories.service';
import { IplantSubCategories } from '../../interfaces/iplantcategories';

@Component({
  selector: 'app-one-plant',
  templateUrl: './one-plant.component.html',
  styleUrl: './one-plant.component.css'
})

export class OnePlantComponent {
    
  plant_details?:IplantSubCategories[] = [];

  // //create a function to get the id from the URL
  constructor(private route: ActivatedRoute, private plantCategoriesService: PlantCategoriesService){

    
    //get the index of the plantSubCategories array from specifc-plants-category that contains the 
    //plant_id
    // var index = peoples.findIndex(function(person) {
    //   return person.attr1 == "john"
    // });

    // var index = plantSubCategories.findIndex(function())
    
    //see if we can get the plantSubCategories array (plantInfoTable2) from parent component "specifc-plants-in-category"
    //passed to this child component "one-plant component"
    
    this.route.paramMap.subscribe(params => {
      let plant_id = params.get('plant_id');
      console.log('this is the plant id ', plant_id);
      
      if(plant_id){
      
      this.plantCategoriesService.getPlantById(parseInt(plant_id)).subscribe((result:any) => {
        //this.plantSubCategories = [result]; //cast result as array object
        console.log('HERE == ',result.plant_info);
        this.plant_details = result.plant_info;  
      })
      }

    
  })
  }

}
