import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { Language } from '../../shared/enums';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  language = new FormControl('');
  languages: { name: string, value: string }[] = [];

  constructor(
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    environment.languages.forEach(value =>
      this.languages.push({ name: Language[value], value })
    );

    this.language.setValue(localStorage.getItem('language') || this.translate.getDefaultLang());
    this.language.valueChanges.subscribe((value: string) => {
      this.translate.use(value);
      localStorage.setItem('language', value);
    });

  }

  trackByLanguage(language: { name: string, value: string }): string {
    return JSON.stringify(language);
  }

}
