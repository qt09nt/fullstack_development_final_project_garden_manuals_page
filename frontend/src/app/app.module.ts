import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PlantsComponent } from './components/plants/plants.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { FormsModule} from '@angular/forms';
import { SignUpValidationComponent } from './sign-up-validation/sign-up-validation.component';
import { PlantCategoriesVegetablesComponent } from './plant-categories-vegetables/plant-categories-vegetables.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    SignUpComponent,
    SignUpValidationComponent,
    PlantCategoriesVegetablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
