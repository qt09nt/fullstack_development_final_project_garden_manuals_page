import { Component } from '@angular/core';
import { PlantCategoriesService } from '../../services/plant-categories.service';
import { Iplantcategories } from '../../interfaces/iplantcategories';
import { PlantCategoriesVegetablesComponent } from '../../plant-categories-vegetables/plant-categories-vegetables.component';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css',
  template: `
  <section>
    <form>
      <input type="text" placeholder="search by plant name">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-plantsCategoriesVegetables [plantsCategoriesVegetables]="plantsCategoriesVegetables"></app-plantsCategoriesVegetables>
  </section>
`,
// imports: [
//   CommonModule,
//   PlantsCategoriesVegetablesComponent
// ],
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
}
