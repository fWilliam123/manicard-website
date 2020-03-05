import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ObjectType, Status } from '../../../../shared/enums';
import { CardItem } from '../../../../shared/interfaces';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent implements OnInit {

  searchForm: FormGroup;
  cardItems: CardItem[];
  ObjectType = ObjectType;

  ngOnInit(): void {
    this._initForm();

    this.cardItems = [
      {
        id: 1,
        image: 'assets/images/auth-page.jpg',
        title: 'Proprete voiture hiver 2020',
        subtitle: '',
        status: Status.ACTIVE,
        price: 80,
        percent: 15
      },
      {
        id: 2,
        image: 'assets/images/auth-page.jpg',
        title: 'Pneus hiver 2020',
        subtitle: '',
        status: Status.PENDING,
        price: 50,
        percent: 30
      },
      {
        id: 3,
        image: 'assets/images/auth-page.jpg',
        title: 'Entretien general',
        subtitle: '',
        status: Status.INACTIVE,
        price: 10,
        percent: 25
      },
      {
        id: 4,
        image: 'assets/images/auth-page.jpg',
        title: 'Entretien general',
        subtitle: '',
        status: Status.ACTIVE,
        price: 90,
        percent: 50
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
