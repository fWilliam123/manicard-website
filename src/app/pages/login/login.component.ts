import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EasySnackBarService } from '../../shared/services/easy-snack-bar.service';
import { UserService } from '../../shared/services/user.service';
import { LoginForm } from './interfaces/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm;

  constructor(
    private readonly userService: UserService,
    private readonly easySnackBar: EasySnackBarService,
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {

    this.loginForm = {
      email: '',
      password: ''
    };

  }

  onSubmit(): void {
    this.translate.get('snackbar.doing.login').subscribe(t => {
      this.easySnackBar.doing(t);
    });

    this.userService.login(this.loginForm).subscribe(() => {
      this.translate.get('snackbar.done.login').subscribe(t => {
        this.easySnackBar.done(t);
      });
    }, (error: HttpErrorResponse) => this.easySnackBar.error(error));
  }
}
