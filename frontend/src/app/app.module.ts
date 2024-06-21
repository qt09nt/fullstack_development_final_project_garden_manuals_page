import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PlantsComponent } from './components/plants/plants.component';

//use this when using Angular Template forms
import { FormsModule} from '@angular/forms';

import { SignUpValidationComponent } from './sign-up-validation/sign-up-validation.component';
import { SpecifcPlantsInCategoryComponent } from './components/specifc-plants-in-category/specifc-plants-in-category.component';
import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { OnePlantComponent } from './components/one-plant/one-plant.component';
import { SafePipe } from 'safe-pipe';

// import { FormGroup } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    SignUpValidationComponent,
    SpecifcPlantsInCategoryComponent,
    NotfoundComponentComponent,
    LoginComponent,
    ReactiveSignupComponent,
    UserComponent,
    OnePlantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,      //angular template forms
    ReactiveFormsModule,
    SafePipe,
  ],
  
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})

export class AppModule { }
