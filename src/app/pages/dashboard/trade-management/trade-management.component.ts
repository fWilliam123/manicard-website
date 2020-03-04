import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ObjectType, Status } from '../../../shared/enums';
import { CardItem } from '../../../shared/interfaces';

@Component({
  selector: 'app-trade-management',
  templateUrl: './trade-management.component.html',
  styleUrls: ['./trade-management.component.scss']
})
export class TradeManagementComponent implements OnInit {

  searchForm: FormGroup;
  cardItems: CardItem[];
  ObjectType = ObjectType;

  ngOnInit(): void {
    this._initForm();

    this.cardItems = [
      {
        id: 1,
        image: 'assets/images/auth-page.jpg',
        title: 'Groupe Robert',
        subtitle: 'Toronto',
        status: Status.ACTIVE
      },
      {
        id: 2,
        image: 'assets/images/auth-page.jpg',
        title: 'Bollore',
        subtitle: 'Ottawa',
        status: Status.PENDING
      },
      {
        id: 3,
        image: 'assets/images/auth-page.jpg',
        title: 'Groupe Tremblay',
        subtitle: 'Quebec',
        status: Status.INACTIVE
      },
      {
        id: 4,
        image: 'assets/images/auth-page.jpg',
        title: 'Garage Laval Expert',
        subtitle: 'Montreal',
        status: Status.ACTIVE
      }
    ]
  }

  trackByCardItem(_: number, item: CardItem): string {
    return item.title;
  }

  onSearch(): void {

  }

  private _initForm(): void {
    this.searchForm = new FormGroup({
      groupName: new FormControl(''),
      groupType: new FormControl(''),
      groupID: new FormControl(''),
      memberManicardNumber: new FormControl('')
    });
  }
}
