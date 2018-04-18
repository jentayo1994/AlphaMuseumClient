import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';
import {IImageCard} from '../../components/img-card/img-card.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Історія'
    }
  ];
  imageCards: IImageCard[] = [
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg', caption: 'Літопис подій', link: 'chronicle'},
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg', caption: 'Керівники університету',
      link: 'heads-of-university'},
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg', caption: 'Історія кафедр', link: 'departments'},
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg', caption: 'Випускники', link: 'graduates'},
    {href: 'https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg',
      caption: 'Одвічна шана Вам учасники бойових дій', link: 'veterans'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
