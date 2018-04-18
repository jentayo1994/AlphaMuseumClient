import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Віртуальна екскурсія'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
