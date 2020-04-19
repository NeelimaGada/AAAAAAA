import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimationsService } from './common/animations.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppConstants } from './common/app-constants';
import { SydneyComponent } from './home/sydney/sydney.component';
import { ConferenceComponent } from './home/conference/conference.component';
import { ContactComponent } from './home/contact/contact.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { SydneyModule } from './home/sydney/sydney.module';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule, 
    FormsModule,
    ReactiveFormsModule,
    SydneyModule,
    RouterModule.forRoot([
      
      { path:AppConstants.PathHOME,component:LandingPageComponent},
      { path: AppConstants.pathSYDENY, component: SydneyComponent },
      { path: AppConstants.pathCONFERENCE, component: ConferenceComponent },
      { path: AppConstants.pathCONTACT, component: ContactComponent },
     { path:AppConstants.pathREGISTRATION,component:RegistrationComponent}
     
    ]),
  ],
  providers: [AnimationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
