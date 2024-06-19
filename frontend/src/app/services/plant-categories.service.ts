import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IplantSubCategories, Iplantcategories } from '../interfaces/iplantcategories';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class PlantCategoriesService {
  // static getPlantCategoriesById(arg0: number): any {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) { }

  //http: HttpClient = inject(HttpClient);
  jwtHelper: JwtHelperService = inject(JwtHelperService);


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
  getPlantById(plant_id: number ) {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options = {headers: headers};

    return this.http.get('http://localhost:3000/plant_info/' + plant_id, options);
  }


  signUp(data: {}){
    return this.http.post('http://localhost:3000/register', data);
  }

  signIn(data: {}){
    return this.http.post('http://localhost:3000/login', data);
  }

  isAuthenticated(){
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken(){
    return localStorage.getItem('token'); 
  }
}

