import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IplantSubCategories, Iplantcategories } from '../interfaces/iplantcategories';

@Injectable({
  providedIn: 'root'
})
export class PlantCategoriesService {
  // static getPlantCategoriesById(arg0: number): any {
  //   throw new Error('Method not implemented.');
  // }


  constructor(private http: HttpClient) { }

  getPlantCategories(){
    return this.http.get<Iplantcategories[]>('http://localhost:3000/plant_categories');
  }

  // getPlantCategories(){
  //   const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
  //   const options = {headers: headers};

  //   return this.http.get('http://localhost:3000/plant_categories/', options);
  // }

  
  getPlantCategoriesById(category_id: number | string) : any  {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options = {headers: headers};

    return this.http.get<IplantSubCategories[]>('http://localhost:3000/get_plants_in_plant_category/' + category_id, options);
  }

  //this function is for getting username, email and passsword from the sign up page 
  //and updating the users table
  // getSignUpUsers(form_email, form_username, form_password){

  // }

  signUp(data: {}){
    return this.http.post('http://localhost:3000/register', data);
  }

}
