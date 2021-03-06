import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-veterans',
  templateUrl: './veterans.component.html',
  styleUrls: ['./veterans.component.css']
})
export class VeteransComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Одвічна шана Вам учасники бойових дій'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
