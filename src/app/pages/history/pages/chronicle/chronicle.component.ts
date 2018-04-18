import {Component, Input, OnInit, Output} from '@angular/core';
import {ISlide} from '../../../../components/carousel/carousel.component';
import {HEvent} from '../../../../models/h-event';
import {HEventsService} from '../../../../shared/services/hevents.service';


@Component({
  selector: 'app-chronicle',
  templateUrl: './chronicle.component.html',
  styleUrls: ['./chronicle.component.css']
})
export class ChronicleComponent implements OnInit {
  events: HEvent[];
  @Input() event: HEvent;
  activeEvent: HEvent;
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Літопис подій'
    }
  ];
  constructor(private hEventsService: HEventsService) { }

  ngOnInit() {
    this.getAllHEvents();
    this.hEventsService.getHEvent('5ab42390e59990ecbf28e46a').subscribe(event => this.activeEvent = event);
  }

  getAllHEvents() {
    this.hEventsService.getAllHEvents().subscribe(events => this.events = events);
  }
  setActiveEventDefault() {
    this.activeEvent = this.event;
  }


}
