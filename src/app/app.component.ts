import { registerLocaleData } from '@angular/common';
import localeFr_CA from '@angular/common/locales/fr-CA';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, skip } from 'rxjs/operators';
import { environment } from '../environments/environment.prod';
import { User } from './shared/interfaces/user';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mode = 'side';
  logged = true;
  opened = true;

  @ViewChild('snav', { static: true }) appDrawer: MatSidenav;
  @ViewChild('pageContainer', { read: ViewContainerRef, static: true }) pageContainer: ViewContainerRef;
  @Select(state => state.user) userState$: Observable<User>;
  @Select(state => state.sidenav) sidenav$: Observable<boolean>;

  constructor(
    private readonly translate: TranslateService,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {

    // Languages
    registerLocaleData(localeFr_CA, 'fr-CA');
    this.translate.addLangs(environment.languages);
    this.translate.setDefaultLang('fr-CA');
    const locale = this.localStorageService.getLanguage();
    if (locale) {
      this.translate.use(locale);
    }

    // Setup user state
    this.userState$.subscribe(user => {
      this.logged = !!user;
    });

    this.sidenav$.subscribe(opened => {
      this.opened = opened;
    });

    this.router.events
      .pipe(
        filter(evt => evt instanceof NavigationEnd),
        skip(1))
      .subscribe(() => this.pageContainer.element.nativeElement.scrollTo(0, 0));
  }

  onResize(): void {
    // TODO : Fix hard-coded 363.
    this.mode = (innerWidth - 363) > 600 ? 'side' : 'over';
  }

}
