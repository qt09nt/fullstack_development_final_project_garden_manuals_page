import { Injectable } from '@angular/core';

//@injectable decorator tells Angular that this file is a service file and it can get injected
//as a dependencyinside components and other service's constructors

@Injectable({
  providedIn: 'root'
})
export class GetPlantCategoriesService {

  constructor() { }
}
// GetPlantCategories() {
//   return ["vegetables", "fruits", "herbs", "cacti and succulents", "houseplants", "shrubs", "ferns", "flowers", "trees", "air plants"]
// }

