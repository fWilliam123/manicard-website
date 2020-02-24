import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../shared/services';
import { doingSnackBar, doneSnackBar } from '../../../shared/utils';
import { LoginForm } from './interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm;

  constructor(
    private readonly userService: UserService,
    private readonly snackBar: MatSnackBar,
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {

    this.loginForm = {
      Email: '',
      Password: ''
    };

  }

  onSubmit(): void {
    this.translate.get('snackbar.request.doing').subscribe(t => {
      doingSnackBar(this.snackBar, t);
    });
    this.userService.login(this.loginForm).subscribe(() => {
      this.translate.get(marker('snackbar.login.done')).subscribe(t => {
        doneSnackBar(this.snackBar, t);
      });
    });
  }

}
