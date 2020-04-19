import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SydneyRoutingModule } from './sydney-routing.module';
import { AboutSydneyComponent } from './about-sydney/about-sydney.component';
import { PlaceToEatComponent } from './place-to-eat/place-to-eat.component';
import { PlaceToShopComponent } from './place-to-shop/place-to-shop.component';
import { PlaceToVisitComponent } from './place-to-visit/place-to-visit.component';
import { TipsDuringStayComponent } from './tips-during-stay/tips-during-stay.component';
import { DosAndDontsComponent } from './dos-and-donts/dos-and-donts.component';
import { SydneyNightLifeComponent } from './sydney-night-life/sydney-night-life.component';
import { SydneyComponent } from './sydney.component';


@NgModule({
  declarations: [AboutSydneyComponent, 
    PlaceToEatComponent, SydneyComponent,
    PlaceToShopComponent, PlaceToVisitComponent,
     TipsDuringStayComponent, DosAndDontsComponent],
  imports: [
    CommonModule,
    SydneyRoutingModule
  ]
})
export class SydneyModule { }
