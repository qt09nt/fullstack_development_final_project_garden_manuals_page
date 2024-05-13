import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iplantcategories } from '../interfaces/iplantcategories';

@Injectable({
  providedIn: 'root'
})
export class PlantCategoriesService {

  constructor(private http: HttpClient) { }

  getPlantCategories(){
    return this.http.get<Iplantcategories[]>('http://localhost:3000/plant_categories');
  }
}
