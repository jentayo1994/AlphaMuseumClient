import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';
import {IImageCard} from '../../components/img-card/img-card.component';

@Component({
  selector: 'app-fonds',
  templateUrl: './fonds.component.html',
  styleUrls: ['./fonds.component.scss']
})
export class FondsComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Фонди музею'
    }
  ];

  imageCards: IImageCard[] = [
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg',
      caption: 'Архівні документи', link: 'archival-documents'},
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg',
      caption: 'Механізми і прилади', link: 'mechanisms-and-devices'},
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg',
      caption: 'Література', link: 'literature'},
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg',
      caption: 'Аудіовізуальні матеріали', link: 'audiovisual-materials'},
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg',
      caption: 'Твори мистецтв', link: 'artworks'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
