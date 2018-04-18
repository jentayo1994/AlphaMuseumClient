import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public map: any = { lat: 51.5050747, lng: 31.335344 };

  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Про музей'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
