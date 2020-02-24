import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../shared/services';
import { doingSnackBar, doneSnackBarAction } from '../../../shared/utils';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  emailForm: string;

  constructor(
    private readonly userService: UserService,
    private readonly snackBar: MatSnackBar,
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.emailForm = '';
  }

  onSubmit(): void {
    this.translate.get(marker('snackbar.request.doing')).subscribe(t => {
      doingSnackBar(this.snackBar, t);
    });

    this.userService.forgotPassword(this.emailForm).subscribe(() => {
      this.translate.get(marker('snackbar.forgot_password.done')).subscribe(t => {
        doneSnackBarAction(this.snackBar, t);
      });
    });
  }

}
