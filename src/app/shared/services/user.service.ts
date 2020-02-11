import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginForm } from '../../pages/login/interfaces/login-form';
import { LoginResponse } from '../../pages/login/interfaces/login-response';
import { User } from '../interfaces/user';
import { Login, Logout } from '../states/user.state';
import { LocalStorageService } from './local-storage.service';

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
   * Send request to authenticate the user
   * @param loginForm form
   */
  requestConnection(loginForm: LoginForm): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.host_api}/api/manicardsclient/login`, loginForm);
  }

  /**
   * Get infos of user
   */
  infosUser(): Observable<User> {
    return this.http.get<User>(`${environment.host_api}/api/manicardsclient/login`);
  }

  /**
   * Authenticate the user and redirect to dashboard page
   * @param loginForm form
   */
  login(loginForm: LoginForm): Observable<LoginResponse> {
    const login$ = this.requestConnection(loginForm);
    login$.subscribe({
      next: (result): void => {
        this.localStorageService.setGuid(result.guid);
        this.infosUser().subscribe(user => {
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
   * Execute logoutRequest
   */
  sendLogout(): void {
    this.logoutRequest().pipe(finalize((): void => this._logout())).subscribe();
  }

  /**
   * Send request to logout the user
   */
  logoutRequest(): Observable<void> {
    return this.http.get<void>(`${environment.host_api}/api/manicardsclient/logout`);
  }

  resetPassword(email: string): Observable<void> {
    return this.http.post<void>(`${environment.host_api}/api/manicardsclient/reset`, email);
  }

  private _logout(): void {
    this.localStorageService.removeGuid();
    this.store.dispatch(new Logout());
    this.router.navigate(['/login']);
  }

}
