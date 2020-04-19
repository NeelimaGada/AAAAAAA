import { ConferenceComponent } from './conference.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceRoutingModule } from './conference-routing.module';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { HotelComponent } from './hotel/hotel.component';
import { HowToReachComponent } from './how-to-reach/how-to-reach.component';

  

@NgModule({
  declarations: [ItineraryComponent, HotelComponent, HowToReachComponent],
  imports: [
    CommonModule,
    ConferenceRoutingModule
  ]
})
export class ConferenceModule { }
