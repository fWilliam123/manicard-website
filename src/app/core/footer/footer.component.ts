import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../shared/enums/language.enum';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  language = new FormControl('');
  languages: { name: string, value: string }[] = [];
  year: number = new Date().getFullYear();

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
