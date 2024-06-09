import { Component, Input } from '@angular/core';
import {CommonModule } from '@angular/common';
import { PlantCategoriesVegetables } from '../plant-categories-vegetables';

@Component({
  selector: 'app-plant-categories-vegetables',
  template: `
    <p>
      plant-categories-vegetables works!
    </p>
  `,
  styleUrl: './plant-categories-vegetables.component.css'
})
export class PlantCategoriesVegetablesComponent {
  @Input () PlantCategoriesVegetables!: PlantCategoriesVegetables;

}
