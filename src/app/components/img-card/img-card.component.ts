import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
export interface IImageCard {
  href: string;
  caption: string;
  link: string;
}
@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent implements OnInit {
  @Input() imageCard: IImageCard;
  constructor(private router: Router, private currentRoute: ActivatedRoute) { }
  ngOnInit() {
  }
  goTo() {
    this.router.navigate([this.router.url.toString(), this.imageCard.link]);
  }

}
