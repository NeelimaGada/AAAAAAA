import { ConferenceComponent } from './conference.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { HotelComponent } from './hotel/hotel.component';
import { HowToReachComponent } from './how-to-reach/how-to-reach.component';


const routes: Routes = [
  {
    path: '', component: ConferenceComponent,
    children: [{ path: '', redirectTo: 'howToReach', pathMatch: 'full' },
    { path: "itinerary", component: ItineraryComponent },
    {path:'hotel',component:HotelComponent},
    {path:'howToReach',component:HowToReachComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferenceRoutingModule { }
