import {Component, OnInit} from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';
import {Event} from '../../models/event';
import {EventsService} from '../../shared/services/events.service';

@Component({
    selector: 'app-events',
    templateUrl: './all-events.component.html',
    styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
    slides: ISlide[] = [
        {
            href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
            alt: '',
            caption: 'Події'
        }
    ];
    events: Event[];

    constructor(private eventsService: EventsService) {
    }

    ngOnInit() {
        this.getAllEvents();
    }

    getAllEvents() {
        this.eventsService.getAllEvents().subscribe(events => this.events = events);
    }
}

