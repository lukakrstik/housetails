import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SetsComponent } from './sets/sets.component';
import { RadioComponent } from './radio/radio.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsComponent,
    HomeComponent,
    AboutComponent,
    SetsComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
