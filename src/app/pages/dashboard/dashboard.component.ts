import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSidenav, MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, skip } from 'rxjs/operators';
import { SidenavState, UserState } from '../../shared/states';
import { User } from './user-management/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mode: MatDrawerMode;
  logged = true;
  opened = true;

  @ViewChild('snav', { static: true }) appDrawer: MatSidenav;
  @ViewChild('pageContainer', { read: ViewContainerRef, static: true }) pageContainer: ViewContainerRef;
  @Select(UserState) userState$: Observable<User>;
  @Select(SidenavState) sidenav$: Observable<boolean>;

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {

    this.mode = 'side';
    // Setup user state
    this.userState$.subscribe({
      next: (user: User): void => {
        this.logged = !!user;
      }
    });

    this.sidenav$.subscribe({
      next: (opened: boolean): void => {
        this.opened = opened;
      }
    });

    this.router.events
      .pipe(
        filter((evt): boolean => evt instanceof NavigationEnd),
        skip(1))
      .subscribe((): void => this.pageContainer.element.nativeElement.scrollTo(0, 0));
  }

  onResize(): void {
    // TODO : Fix hard-coded 363.
    this.mode = (innerWidth - 363) > 600 ? 'side' : 'over';
  }

}
