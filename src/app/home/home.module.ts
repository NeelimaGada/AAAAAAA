import { RegistrationComponent } from './registration/registration.component';
import { ConferenceModule } from './conference/conference.module';
import { SydneyModule } from './sydney/sydney.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent,ContactComponent,RegistrationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SydneyModule,
    ConferenceModule
  ]
})
export class HomeModule { }
