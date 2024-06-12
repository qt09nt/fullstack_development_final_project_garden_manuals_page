import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-specifc-plants-in-category',
  templateUrl: './specifc-plants-in-category.component.html',
  styleUrl: './specifc-plants-in-category.component.css'
})
export class SpecifcPlantsInCategoryComponent {

//create a function to get the id from the route/url
  constructor(private route: ActivatedRoute){

    const plantCategoryId = route.snapshot.paramMap.get('category_id');
      console.log(plantCategoryId);
    //office;
    // ngOnInit(){

    // route.paramMap gets all the parameters in this route
    // this.router.paramMap is a property of type Observable. Observable has a method called subscribe
    //when subscribe is applied, the values of the parameters emitted to these Observable
    //inside subscribe method create an arrow function which has an object of type paramMap passed to it
    //method returns the parameter publishDate and assigns it to the property date
    //these can be displayed in template using interpolation

    //   this.route.paramMap.subscribe(params=>{
    //     this.date=params.get("office");
    // });
  }
}
