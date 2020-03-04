import { Component, OnInit, Input } from '@angular/core';
import { ActionProgressItem } from '../../interfaces';

@Component({
  selector: 'app-actions-progress-item',
  templateUrl: './actions-progress-item.component.html',
  styleUrls: ['./actions-progress-item.component.scss']
})
export class ActionsProgressItemComponent implements OnInit {
  @Input() item: ActionProgressItem;
  @Input() index: number;
  @Input() selectedIndex: number;

  ngOnInit(): void {
  }

}
