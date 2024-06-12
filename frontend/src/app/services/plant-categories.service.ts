import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iplantcategories } from '../interfaces/iplantcategories';

@Injectable({
  providedIn: 'root'
})
export class PlantCategoriesService {

  constructor(private http: HttpClient) { }

  getPlantCategories(){
    return this.http.get<Iplantcategories[]>('http://localhost:3000/plant_categories');
  }

  // getPlantCategories(){
  //   const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
  //   const options = {headers: headers};

  //   return this.http.get('http://localhost:3000/plant_categories/', options);
  // }

  
  getPlantCategoriesById(category_id: number){
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options = {headers: headers};

    return this.http.get('http://localhost:3000/get_plants_in_plant_category/' + category_id, options);
  }

}
