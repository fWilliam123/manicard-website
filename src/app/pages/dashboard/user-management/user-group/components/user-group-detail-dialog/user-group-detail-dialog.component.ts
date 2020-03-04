import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ObjectType } from '../../../../../../shared/enums';
import { DetailAccordionItem } from '../../../../../../shared/interfaces';
import { UserDetailInput } from '../../../users/interfaces';

@Component({
  selector: 'app-user-group-detail-dialog',
  templateUrl: './user-group-detail-dialog.component.html',
  styleUrls: ['./user-group-detail-dialog.component.scss']
})
export class UserGroupDetailDialogComponent implements OnInit {

  detailsAccordion: DetailAccordionItem[];
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: UserDetailInput,
    private readonly dialog: MatDialogRef<UserGroupDetailDialogComponent>,
    readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    this._initForm();
    this.detailsAccordion = [
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
      reduction: new FormControl(45, [Validators.required])
    });
  }

}
