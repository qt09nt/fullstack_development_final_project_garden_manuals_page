import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PlantCategoriesService } from '../../services/plant-categories.service';
import { IplantSubCategories } from '../../interfaces/iplantcategories';

@Component({
  selector: 'app-specifc-plants-in-category',
  templateUrl: './specifc-plants-in-category.component.html',
  styleUrl: './specifc-plants-in-category.component.css'
})

export class SpecifcPlantsInCategoryComponent {
  
  //! used to silence the error message
  //plantSubCategories!: IplantSubCategories[]; 
  plantSubCategories: any = []; 

//create a function to get the id from the route/url
  constructor(private route: ActivatedRoute, private plantCategoriesService: PlantCategoriesService){

    // const plantCategoryId = route.snapshot.paramMap.get('category_id');
    //   console.log(plantCategoryId);

    this.route.paramMap.subscribe(params => {
      let plant_category_id = params.get('category_id');
      console.log('this is the plant category id ', plant_category_id);
      
      if(plant_category_id){
          this.plantCategoriesService.getPlantCategoriesById(plant_category_id).subscribe((result:any) => {
            //this.plantSubCategories = [result]; //cast result as array object
            
            this.plantSubCategories = result.plants;  
            console.log('HG here === ', this.plantSubCategories);
            console.log(typeof(this.plantSubCategories))
         
          })
       }
    })   
  }
}

