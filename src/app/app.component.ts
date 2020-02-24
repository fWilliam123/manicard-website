import { registerLocaleData } from '@angular/common';
import localeFr_CA from '@angular/common/locales/fr-CA';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment.prod';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly translate: TranslateService,
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
  }

}
