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
        title: 'Lavage automobile',
        subtitle: '',
        status: Status.ACTIVE,
        percent: 15,
        icon: this.getDiscountIcon(Status.ACTIVE)
      },
      {
        id: 2,
        image: 'assets/images/auth-page.jpg',
        title: 'Changement de pneus',
        subtitle: '',
        status: Status.PENDING,
        percent: 30,
        icon: this.getDiscountIcon(Status.PENDING)
      },
      {
        id: 3,
        image: 'assets/images/auth-page.jpg',
        title: 'Lavage automobile',
        subtitle: '',
        status: Status.INACTIVE,
        percent: 25,
        icon: this.getDiscountIcon(Status.INACTIVE)
      },
      {
        id: 4,
        image: 'assets/images/auth-page.jpg',
        title: 'Changement de pneus',
        subtitle: '',
        status: Status.ACTIVE,
        percent: 50,
        icon: this.getDiscountIcon(Status.ARCHIVED)
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
