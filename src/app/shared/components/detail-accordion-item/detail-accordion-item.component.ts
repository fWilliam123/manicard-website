import { Component, Input, OnInit } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ObjectType } from '../../enums';
import { DetailAccordionItem, DetailCardItem } from '../../interfaces';

@Component({
  selector: 'app-detail-accordion-item',
  templateUrl: './detail-accordion-item.component.html',
  styleUrls: ['./detail-accordion-item.component.scss']
})
export class DetailAccordionItemComponent implements OnInit {

  @Input() detailAccordionItem: DetailAccordionItem;
  @Input() index: number;

  displayableAccordionItem: DisplayableAccordionItem;

  ngOnInit(): void {
    this.displayableAccordionItem = {
      ...this.detailAccordionItem,
      titleTranslationKey: this._getTitleTranslationKey(this.detailAccordionItem.objectType),
      icon: this._getIcon(this.detailAccordionItem.objectType)
    }
  }

  trackByDetailsCard(_: number, card: DetailCardItem): string {
    return JSON.stringify(card);
  }

  private _getTitleTranslationKey(objectType: ObjectType): string {
    switch (objectType) {
      case ObjectType.PRODUCT:
        return marker('accordion_details.fidelity_card');
      case ObjectType.DISCOUNT:
        return marker('accordion_details.discount');
      case ObjectType.COUPON:
        return marker('accordion_details.coupon');
      case ObjectType.NOTIFICATION:
        return marker('accordion_details.notification');
      // TODO: Check object type of customer group
      case ObjectType.USER_GROUP:
        return marker('accordion_details.customer_group')
      // TODO: Check object type of team
      case ObjectType.CustomerType:
        return marker('accordion_details.team')
      // TODO: Check object type of grouping
      case ObjectType.CONTRACT:
        return marker('accordion_details.grouping')
      // TODO: Check object type of additional details
      case ObjectType.UNDEFINED:
        return marker('accordion_details.additional_details');
      default:
        this._error(objectType);
    }
  }

  private _getIcon(objectType: ObjectType): string {
    switch (objectType) {
      case ObjectType.PRODUCT:
        return 'assets/images/product.png';
      case ObjectType.DISCOUNT:
        return 'assets/images/discount.png';
      case ObjectType.COUPON:
        return 'assets/images/coupon.png';
      case ObjectType.NOTIFICATION:
        return 'assets/images/notification.png';
      case ObjectType.USER_GROUP:
        return 'assets/images/customer-group.png';
      // TODO: Check object type of team
      case ObjectType.CustomerType:
        return 'assets/images/team.png';
      // TODO: Check object type of grouping
      case ObjectType.CONTRACT:
        return 'assets/images/grouping.png';
      // TODO: Check object type of additional details
      case ObjectType.UNDEFINED:
        return '';
      default:
        this._error(objectType);
    }
  }

  private _error(objectType: ObjectType): void {
    throw new Error(`Invalid objectType: ${objectType}`);
  }

}

interface DisplayableAccordionItem extends DetailAccordionItem {
  icon: string;
  titleTranslationKey: string;
}
