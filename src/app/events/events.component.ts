import { Component } from '@angular/core';
import { Event } from '../event';
import { EVENTS } from '../events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events : Event [] = EVENTS;
}
