import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: '404',
      text: 'Сторінка не знайдена'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
