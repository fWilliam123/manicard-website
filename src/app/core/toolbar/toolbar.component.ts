import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Language } from '../../shared/enums/language.enum';
import { UserService } from '../../shared/services/user.service';
import { CloseSidenav, OpenSidenav } from '../../shared/states/sidenav.state';
import { User } from '../../pages/dashboard/user-management/interfaces';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  language = new FormControl('');
  languages: { name: string, value: string }[] = [];

  @Input() snav: MatSidenav;
  @Select(state => state.user) userState$: Observable<User>;
  user: User;

  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly store: Store,
    private readonly translate: TranslateService,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.userState$.subscribe(user => this.user = user);

    this._initLanguange();
    this._initIcons();
    this._onLanguageChange();
  }

  trackByLanguage(language: { name: string, value: string }): string {
    return JSON.stringify(language);
  }

  toggle(): void {
    this.snav.toggle();
    this.store.dispatch(this.snav.opened ? new OpenSidenav() : new CloseSidenav());
  }

  onLogout(): void {
    this.userService.logout();
  }

  private _initIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'user',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/user.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'logout',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'notification',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/notifications.svg')
    );
  }

  private _initLanguange(): void {
    environment.languages.forEach(value =>
      this.languages.push({ name: Language[value], value })
    );

    this.language.setValue(localStorage.getItem('language') || this.translate.getDefaultLang());
  }

  private _onLanguageChange(): void {
    this.language.valueChanges.subscribe((value: string) => {
      this.translate.use(value);
      localStorage.setItem('language', value);
    });
  }
}
