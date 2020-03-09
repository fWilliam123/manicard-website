import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CardItem } from '../../../../shared/interfaces';
import { ObjectType, Status } from '../../../../shared/enums';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

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
        price: 30,
        percent: 15
      },
      {
        id: 2,
        image: 'assets/images/auth-page.jpg',
        title: 'Pneus hiver 2020',
        subtitle: '',
        status: Status.PENDING,
        percent: 30,
        price: 90
      },
      {
        id: 3,
        image: 'assets/images/auth-page.jpg',
        title: 'Entretien general',
        subtitle: '',
        status: Status.INACTIVE,
        percent: 25,
        price: 19
      },
      {
        id: 4,
        image: 'assets/images/auth-page.jpg',
        title: 'Entretien general',
        subtitle: '',
        status: Status.ACTIVE,
        percent: 50,
        price: 4
      }
    ]
  }

  getDiscountIcon(status: Status): string {
    switch (status) {
      case Status.ACTIVE:
        return 'assets/images/customer-group.png';
      case Status.INACTIVE:
        return 'assets/images/team.png';
      case Status.PENDING:
        return 'assets/images/students.png';
      case Status.UNDEFINED:
        return 'assets/images/worker.png';
      case Status.ARCHIVED:
        return 'assets/images/students.png';
      default:
        throw new Error(`Invalid statusType: ${status}`);
    }
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
