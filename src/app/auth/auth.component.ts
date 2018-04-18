import {Component} from '@angular/core';
import {ISlide} from '../components/carousel/carousel.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg',
      alt: 'First'
    }
  ];
}
