import { TipsDuringStayComponent } from './tips-during-stay/tips-during-stay.component';
import { SydneyNightLifeComponent } from './sydney-night-life/sydney-night-life.component';
import { PlaceToVisitComponent } from './place-to-visit/place-to-visit.component';
import { PlaceToShopComponent } from './place-to-shop/place-to-shop.component';
import { PlaceToEatComponent } from './place-to-eat/place-to-eat.component';
import { DosAndDontsComponent } from './dos-and-donts/dos-and-donts.component';
import { AboutSydneyComponent } from './about-sydney/about-sydney.component';
import { SydneyComponent } from './sydney.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SydneyComponent,
    children: [{ path: '', redirectTo: 'aboutSydney', pathMatch: 'full' },
    { path: "aboutSydney", component: AboutSydneyComponent },
    {path:'dosandDonts',component:DosAndDontsComponent},
    {path:'placeToEat',component:PlaceToEatComponent},
    {path:'placeToShop',component:PlaceToShopComponent},
    {path:'placeToVisit',component:PlaceToVisitComponent},
    {path:'sydneyNightLife',component:SydneyNightLifeComponent},
    {path:'tipsDuringStay',component:TipsDuringStayComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SydneyRoutingModule { }
