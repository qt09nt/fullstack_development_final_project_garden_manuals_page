import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PlantCategoriesService {

  http:HttpClient = inject(HttpClient);

  getPlantCategories(){
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};

    return this.http.get('http://localhost:3000/plant_categories/', options);
  }

  getPlantCategoriesById(){
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options = {headers: headers};

    return this.http.get('http://localhost:3000/plant_categories/:plant_category_ID/', options);
  }

  
  constructor() { }  

}
