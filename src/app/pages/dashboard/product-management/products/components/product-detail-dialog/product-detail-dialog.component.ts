import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { UserDetailInput } from '../../../../user-management/users/interfaces';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent implements OnInit {

  form: FormGroup;
  images: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: UserDetailInput,
    readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.images = ['assets/images/auth-page.jpg', 'assets/images/auth-page.jpg', 'assets/images/auth-page.jpg', 'assets/images/auth-page.jpg']
  }

}
