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
  searchText = "";
  filteredPlants!: Iplantcategories[];

  constructor(private plantCategoriesService: PlantCategoriesService ){
    this.plantCategoriesService.getPlantCategories().subscribe((result) => {
      this.plantCategories = result;
      this.filteredPlants = this.plantCategories;
    }); 
  }

  search(){
    if(this.searchText) {
      if(this.plantCategories){
        this.filteredPlants = this.plantCategories.filter((data) => {
          return data.plant_category_name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase());
        })
      } else {
        //show the message saying no data
      }
    } else {
      this.filteredPlants = this.plantCategories;
    }
  }

  clear(){
    this.filteredPlants = this.plantCategories;
    this.searchText = '';
  }

}
