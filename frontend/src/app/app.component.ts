import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { PlantCategoriesService } from './plant-categories.service';
import { CommonModule} from '@angular/common';
import { PlantsComponent } from './components/plants/plants.component';
import { PlantCategoriesDetailsComponent } from './plant-categories-details/plant-categories-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [
  //   CommonModule,
  //   PlantCategoriesDetailsComponent
  // ],

  template: `
  <section>
    <form>
      <input type="text" placeholder="Search by plant name">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-plant-categories-details></app-plant-categories-details>
  </section>
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

