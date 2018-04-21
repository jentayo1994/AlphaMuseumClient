import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';
import {ActivatedRoute, Params} from '@angular/router';
import {Event} from '../../shared/models/event';
import {EventsService} from '../../shared/services/events.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: ''
    }
  ];
  constructor(private _eventsServices: EventsService, private _activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
      this._activatedRoute.paramMap.subscribe(
          params => {
            const id = params['id'];
            this._eventsServices.getEvent(id);
          }
      );
  }

}
