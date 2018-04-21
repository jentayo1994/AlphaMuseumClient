import { Component, OnInit } from '@angular/core';
import {Action} from '../../shared/models/action';
import {ISlide} from '../../components/carousel/carousel.component';
import {ActionsService} from '../../shared/services/actions.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-action-details',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.scss']
})
export class ActionDetailComponent implements OnInit {

  action: Action;
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Акція '
    }
  ];
  constructor(private _actionsServices: ActionsService, private _activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
        params => {
          const id = params['id'];
          this._actionsServices.getAction(id);
        }
    );

  }


}
