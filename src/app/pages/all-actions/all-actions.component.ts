import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-all-actions',
  templateUrl: './all-actions.component.html',
  styleUrls: ['./all-actions.component.scss']
})
export class AllActionsComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Акції'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
