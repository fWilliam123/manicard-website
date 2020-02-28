import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { MemberTypeMappingService } from '../../../../../../../shared/services';
import { MemberType } from '../../../../enums';
import { UserDetailInput } from '../../../interfaces/user-detail-input';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  };
  // TODO: Remove
  fakeDate = new Date();
  form: FormGroup;
  displayableMemberTypes: DisplayableMemberType[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: UserDetailInput,
    private readonly dialog: MatDialogRef<UserDetailComponent>,
    readonly translate: TranslateService,
    private readonly memberTypeMappingService: MemberTypeMappingService
  ) { }

  ngOnInit(): void {

    this._initDisplayableMemberType();
    this._initForm();
  }

  onConfirm(): void {
  }

  trackByDisplayableMemberType(_: number, displayableMemberType: DisplayableMemberType): MemberType {
    return displayableMemberType.key;
  }

  private _initForm(): void {
    this.form = new FormGroup({
      memberType: new FormControl(this.data.user.MemberType, [Validators.required]),
      reductions: new FormControl(this.data.user.AvailableCredit, [Validators.required])
    });
  }

  private _initDisplayableMemberType(): void {
    const memberTypes = [MemberType.BLUE, MemberType.BRONZE, MemberType.GOLD, MemberType.SILVER];
    this.displayableMemberTypes = memberTypes.map<DisplayableMemberType>(item => ({
      key: item,
      translationKey: this.memberTypeMappingService.translationKey(item)
    }))
  }

}

interface DisplayableMemberType {
  key: MemberType;
  translationKey: string;
}
