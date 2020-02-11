import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) { }

  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._can();
  }

  canLoad(
    _route: Route,
    _segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this._can();
  }

  private _can(): boolean {
    const logged = !!this.userService.isLogged();

    if (!logged) {
      this.router.navigate(['/login']);
    }

    return logged;
  }
}
