import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PlantsComponent } from './components/plants/plants.component';

import { FormsModule} from '@angular/forms';
import { SignUpValidationComponent } from './sign-up-validation/sign-up-validation.component';
import { SpecifcPlantsInCategoryComponent } from './components/specifc-plants-in-category/specifc-plants-in-category.component';
import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    SignUpValidationComponent,
    SpecifcPlantsInCategoryComponent,
    NotfoundComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
