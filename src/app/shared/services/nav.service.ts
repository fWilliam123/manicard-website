import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavService {
  public snav: MatSidenav;
  public currentUrl$ = new BehaviorSubject<string>(undefined);

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl$.next(event.urlAfterRedirects);
      }
    });
  }
}
