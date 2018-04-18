import {Component, Input, OnInit} from '@angular/core';
import {Action} from '../../models/action';
import {ActionsService} from '../../shared/services/actions.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
 actions: Action[];
  constructor(private actionsService: ActionsService) { }

  ngOnInit() {
    this.getAllActions();
  }

  getAllActions() {
    this.actionsService.getAllActions().subscribe(actions => this.actions = actions);
  }

  getActions() {
    const limit = {param: 'filter[limit]', value: '1'};
    this.actionsService.getActions(limit).subscribe(actions => this.actions = actions);
  }

}
