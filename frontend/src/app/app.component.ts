import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { PlantCategoriesService } from './services/plant-categories.service';
import { CommonModule} from '@angular/common';
import { PlantsComponent } from './components/plants/plants.component';
// import { PlantCategoriesDetailsComponent } from './components/plant-categories-details/plant-categories-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',  
})

export class AppComponent {
  title = 'Gardening Manuals Home';

  plantCategoriesService: PlantCategoriesService = inject(PlantCategoriesService);
  plantCategories: any;

  constructor(){
    
  }

  ngOnInit(){

    this.plantCategoriesService.getPlantCategories().subscribe((result:any) => {
      console.log('Queenie this is getting called without clicking the button',result);
      this.plantCategories = result;
    })
  }

  // getPlantCategories(){
  //   this.plantCategoriesService.getPlantCategories().subscribe((result:any) => {
  //     console.log(result);
  //     this.plantCategories = result.plantCategories;
  //   })

  // }
}

