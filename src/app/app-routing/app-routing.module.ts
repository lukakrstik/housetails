import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { RadioComponent } from '../radio/radio.component';
import { HomeComponent } from '../home/home.component';
import { SetsComponent } from '../sets/sets.component';
import { EventsComponent } from '../events/events.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'radio', component: RadioComponent},
  { path: 'sets', component: SetsComponent},
  { path: 'event', component: EventsComponent},
  { path: 'home', component: HomeComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
