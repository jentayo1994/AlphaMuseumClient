import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-mechanisms-and-devices',
  templateUrl: './mechanisms-and-devices.component.html',
  styleUrls: ['./mechanisms-and-devices.component.css']
})
export class MechanismsAndDevicesComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Механізми і прилади'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
