import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-heads-of-university',
  templateUrl: './heads-of-university.component.html',
  styleUrls: ['./heads-of-university.component.scss']
})
export class HeadsOfUniversityComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Керівники університету'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
