import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

export interface ISlide {
  href: string;
  alt: string;
  caption?: string;
  text?: string;
}

@Component({
  selector: 'app-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() slides: ISlide[];
  constructor() { }

  ngOnInit() {
  }

}
