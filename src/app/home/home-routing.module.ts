import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[{path:'',redirectTo:"sydney",pathMatch:"full"},
  {path:"sydney",loadChildren: () => import('./sydney/sydney.module').then(m => m.SydneyModule)},
  {path:"conference",loadChildren: () => import('./conference/conference.module').then(m => m.ConferenceModule)},
  {path:"contact",component:ContactComponent},
  {path:"registration",component:RegistrationComponent}
]  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
