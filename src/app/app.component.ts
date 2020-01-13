import { registerLocaleData } from '@angular/common';
import localeFr_CA from '@angular/common/locales/fr-CA';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  mode = 'side';
  logged = true;
  opened = true;

  @ViewChild('snav', { static: true }) appDrawer: MatSidenav;
  @Select(state => state.sidenav) sidenav$: Observable<boolean>;

  constructor(
    private readonly translate: TranslateService,
    private readonly localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit(): void {

    // Languages
    registerLocaleData(localeFr_CA, 'fr-CA');
    this.translate.addLangs(environment.languages);
    this.translate.setDefaultLang('fr-CA');
    const locale = this.localStorageService.getLanguage();
    if (locale) {
      this.translate.use(locale);
    }

    this.sidenav$.subscribe(opened => {
      this.opened = opened;
    });
  }

  onResize(): void {
    // TODO : Fix hard-coded 363.
    this.mode = (innerWidth - 363) > 600 ? 'side' : 'over';
  }

}
