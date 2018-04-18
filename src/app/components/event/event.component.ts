import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../shared/services/events.service';
import { Event } from '../../models/event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  events: Event[];
  constructor(private _eventsService: EventsService) {}

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this._eventsService.getAllEvents().subscribe(events => this.events = events);
  }

}
