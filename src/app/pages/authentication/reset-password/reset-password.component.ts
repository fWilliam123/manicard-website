import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../shared/services';
import { doingSnackBar, doneSnackBar } from '../../../shared/utils';
import { areEqualValidator, REGEX_PASSWORD } from '../../../shared/validators';
import { ResetPasswordForm } from './interfaces';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly translate: TranslateService,
    private readonly snackBar: MatSnackBar,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {

    this.initForm();

  }

  onSubmit(): void {

    const data: ResetPasswordForm = {
      Email: this.form.controls.email.value,
      OldPassword: this.form.controls.oldPassword.value,
      NewPassword: this.form.controls.newPassword.value
    }

    this.translate.get('snackbar.request.doing').subscribe(t => {
      doingSnackBar(this.snackBar, t);
    });

    this.userService.resetPassword(data).subscribe({
      complete: (): void => {
        this.translate.get(marker('snackbar.reset_password.done')).subscribe(t => {
          doneSnackBar(this.snackBar, t)
        });
      }
    });

  }

  private initForm(): void {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.pattern(REGEX_PASSWORD)]),
      // newPassword: new FormControl('', [Validators.required, Validators.pattern(REGEX_PASSWORD)]),
      confirmPassword: new FormControl('',
        [Validators.required, Validators.pattern(REGEX_PASSWORD), areEqualValidator('password')]),
      email: new FormControl('', [Validators.required, Validators.email])
    });

  }

}
