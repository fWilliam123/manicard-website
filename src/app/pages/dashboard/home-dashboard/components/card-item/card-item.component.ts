import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() title: string;
  @Input() numberItems: number;
  @Output() readonly selectedCard: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onSelectedCard(): void {
    this.selectedCard.emit();
  }

}
