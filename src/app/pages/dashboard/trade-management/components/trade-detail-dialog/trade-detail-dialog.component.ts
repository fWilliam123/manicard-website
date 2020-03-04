import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ObjectType } from '../../../../../shared/enums';
import { DetailAccordionItem } from '../../../../../shared/interfaces';
import { UserDetailComponent } from '../../../user-management/users/components/dialogs/user-detail/user-detail.component';
import { UserDetailInput } from '../../../user-management/users/interfaces';

@Component({
  selector: 'app-trade-detail-dialog',
  templateUrl: './trade-detail-dialog.component.html',
  styleUrls: ['./trade-detail-dialog.component.scss']
})
export class TradeDetailDialogComponent implements OnInit {

  dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  };
  detailsAccordion: DetailAccordionItem[];
  // TODO: Remove
  fakeDate = new Date();
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: UserDetailInput,
    private readonly dialog: MatDialogRef<UserDetailComponent>,
    readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    this._initForm();
    this.detailsAccordion = [
      {
        total: 10,
        objectType: ObjectType.PRODUCT,
        detailsCard: [
          { title: 'Lavage regulier', subtitle: 'Laverie super', price: 17.50, image: 'assets/images/auth-page.jpg' },
          { title: 'Lavage regulier', subtitle: 'Laverie super', price: 17.50, image: 'assets/images/auth-page.jpg' }
        ]
      },
      {
        total: 40,
        objectType: ObjectType.DISCOUNT,
        detailsCard: [
          {
            title: 'Rabais saint valentin', date: new Date(), subtitle: 'Beautiful moment', image: 'assets/images/auth-page.jpg',
            percent: 15
          },
          {
            title: 'Rabais saint valentin', date: new Date(), subtitle: 'Beautiful moment', image: 'assets/images/auth-page.jpg',
            percent: 35
          },
        ]
      },
      {
        total: 70,
        objectType: ObjectType.COUPON,
        detailsCard: [
          { title: 'Lavage a la main', subtitle: 'Laverie super luxe', image: 'assets/images/auth-page.jpg', numberItem: 15 },
          { title: 'Lavage a la main', subtitle: 'Laverie super luxe', image: 'assets/images/auth-page.jpg', numberItem: 15 },
        ]
      },
      {
        total: 90,
        objectType: ObjectType.NOTIFICATION,
        detailsCard: [
          { title: 'Fermeture momentannee', subtitle: 'Laverie super vie', image: 'assets/images/auth-page.jpg' },
          { title: 'Fermeture momentannee', subtitle: 'Laverie super vie', image: 'assets/images/auth-page.jpg' },
        ]
      },
      {
        total: 50,
        // TODO: Replace to correct object type
        objectType: ObjectType.USER_GROUP,
        detailsCard: [
          { title: 'Club sport Laval', subtitle: '26 membres', image: 'assets/images/auth-page.jpg' },
          { title: 'Club sport Laval', subtitle: '26 membres', image: 'assets/images/auth-page.jpg' },
        ]
      },
    ];
  }

  onConfirm(): void {
    this.dialog.close();
  }

  trackByDetailAccordion(_: number, accordion: DetailAccordionItem): string {
    return accordion.objectType.toString()
  }

  private _initForm(): void {
    this.form = new FormGroup({
      balance: new FormControl(34, [Validators.required]),
      reduction: new FormControl(2, [Validators.required])
    });
  }

}
