import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg',
      alt: 'First'
    },
    {
      href: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg',
      alt: 'Second'
    },
    {
      href: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg',
      alt: 'Third'
    },
  ];
  constructor() {  }

  ngOnInit() {
  }

}
