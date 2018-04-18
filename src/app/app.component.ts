import { Component } from '@angular/core';
import {ISlide} from './components/carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
