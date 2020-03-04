import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ObjectType } from '../../enums';
import { DetailCardItem } from '../../interfaces';

@Component({
  selector: 'app-detail-card-item',
  templateUrl: './detail-card-item.component.html',
  styleUrls: ['./detail-card-item.component.scss']
})
export class DetailCardItemComponent implements OnInit {

  @Input() detailCardItem: DetailCardItem;
  @Input() objectType: ObjectType;

  dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  };
  ObjectType = ObjectType;

  constructor(readonly translate: TranslateService) { }

  ngOnInit(): void {

  }

}
