import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { PlantCategoriesService } from './plant-categories.service';
import { CommonModule} from '@angular/common';
import { PlantsComponent } from './components/plants/plants.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // imports: [
  //   PlantsComponent,
  // ],
  styleUrl: './app.component.css',
  template: `
  <h1>Hello world!</h1>
`,
})

export class AppComponent {
  title = 'Gardening Manuals Home';

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

