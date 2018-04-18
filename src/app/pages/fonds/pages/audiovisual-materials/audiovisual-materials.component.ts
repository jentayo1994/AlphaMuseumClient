import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-audiovisual-materials',
  templateUrl: './audiovisual-materials.component.html',
  styleUrls: ['./audiovisual-materials.component.css']
})
export class AudiovisualMaterialsComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Аудіовізуальні матеріали'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
