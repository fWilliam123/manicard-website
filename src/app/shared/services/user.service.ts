import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginForm } from '../../pages/authentication/login/interfaces/login-form';
import { LoginResponse } from '../../pages/authentication/login/interfaces/login-response';
import { User } from '../interfaces/user';
import { Login, Logout } from '../states/user.state';
import { LocalStorageService } from './local-storage.service';
import { ResetPasswordForm } from '../../pages/authentication/reset-password/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService,
    private readonly store: Store,
    private readonly router: Router
  ) { }

  /**
   * Authenticate the user and redirect to dashboard page if credentials is correct
   * @param loginForm form
   */
  login(loginForm: LoginForm): Observable<LoginResponse> {
    const login$ = this._requestConnection(loginForm);
    login$.subscribe({
      next: (result): void => {
        this.localStorageService.setGuid(result.guid);
        this._userInfos().subscribe(user => {
          this.store.dispatch(new Login(user));
          this.router.navigate(['/']);
        });
      },
    });

    return login$;
  }

  /**
   * Know if the user is logged
   */
  isLogged(): boolean {
    return !!this.localStorageService.getGuid();
  }

  /**
   * Disconnect the user and redirect to login page
   */
  logout(): void {
    this._logoutRequest().pipe(finalize((): void => this._logout())).subscribe();
  }

  /**
   * The user receive an email with a link to reset a password
   * @param email email
   */
  forgotPassword(email: string): Observable<void> {
    return this.http.post<void>(`${environment.host_api}/api/manicardsclient/recoverpassword`, email);
  }

  /**
   * Reset a password
   * @param form form
   */
  resetPassword(form: ResetPasswordForm): Observable<void> {
    return this.http.post<void>(
      `${environment.host_api}api/manicardsclient/changepassword/${this.localStorageService.getGuid()}`,
      form);
  }

  /**
   * Send request to logout the user
   */
  private _logoutRequest(): Observable<void> {
    return this.http.get<void>(`${environment.host_api}/api/manicardsclient/logout`);
  }

  /**
   * Get infos of user
   */
  private _userInfos(): Observable<User> {
    return this.http.get<User>(`${environment.host_api}/api/manicardsclient/login`);
  }

  /**
   * Send request to authenticate the user
   * @param loginForm form data
   */
  private _requestConnection(loginForm: LoginForm): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.host_api}/api/manicardsclient/login`, loginForm);
  }

  private _logout(): void {
    this.localStorageService.removeGuid();
    this.store.dispatch(new Logout());
    this.router.navigate(['/login']);
  }

}
