import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.css']
})
export class LiteratureComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Література'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
