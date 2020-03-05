import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CardItem } from '../../../../shared/interfaces';
import { ObjectType, Status } from '../../../../shared/enums';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  searchForm: FormGroup;
  cardItems: CardItem[];
  ObjectType = ObjectType;

  ngOnInit(): void {
    this._initForm();

    this.cardItems = [
      {
        id: 1,
        image: 'assets/images/auth-page.jpg',
        title: 'Diagnostic general',
        subtitle: 'Expert garage',
        status: Status.ACTIVE,
        price: 80,
        icon: this._getProductIcon(Status.ACTIVE)
      },
      {
        id: 2,
        image: 'assets/images/auth-page.jpg',
        title: 'Changement de pneus',
        subtitle: 'Expert garage',
        status: Status.PENDING,
        price: 50,
        icon: this._getProductIcon(Status.PENDING)
      },
      {
        id: 3,
        image: 'assets/images/auth-page.jpg',
        title: 'Vidange',
        subtitle: 'Expert garage',
        status: Status.INACTIVE,
        price: 10,
        icon: this._getProductIcon(Status.INACTIVE)
      },
      {
        id: 4,
        image: 'assets/images/auth-page.jpg',
        title: 'Lavage automobile',
        subtitle: 'Expert garage',
        status: Status.ACTIVE,
        price: 90,
        icon: this._getProductIcon(Status.ACTIVE)
      }
    ]
  }

  trackByCardItem(_: number, item: CardItem): string {
    return item.title;
  }

  onSearch(): void {

  }

  private _getProductIcon(status: Status): string {
    if (status === Status.ACTIVE) {
      return 'assets/images/product.png';
    }

    return '';
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
