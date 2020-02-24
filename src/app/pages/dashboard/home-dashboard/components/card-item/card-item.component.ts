import { Component, Input, OnInit } from '@angular/core';
import { CardItemInput } from '../../interfaces';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() item: CardItemInput;
  @Input() index: number;
  @Input() selectedIndex: number;

  ngOnInit(): void {
  }

}
