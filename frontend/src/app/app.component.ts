import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { PlantCategoriesService } from './plant-categories.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  plantCategoriesService: PlantCategoriesService = inject(PlantCategoriesService);
  plantCategories: any;

  constructor(){
 
    this.plantCategoriesService.getPlantCategoriesById().subscribe((result:any) => {
      console.log('Plant Category ==== ', result);
    })

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
