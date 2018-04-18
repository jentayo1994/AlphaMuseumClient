import { Component, OnInit } from '@angular/core';
import {ISlide} from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-archival-documents',
  templateUrl: './archival-documents.component.html',
  styleUrls: ['./archival-documents.component.css']
})
export class ArchivalDocumentsComponent implements OnInit {
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Архівні документи'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
