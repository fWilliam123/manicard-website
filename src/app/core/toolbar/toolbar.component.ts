import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngxs/store';
import { CloseSidenav, OpenSidenav } from '../../shared/states/sidenav.state';
import { UserState } from '../../shared/states/user.state';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() snav: MatSidenav;
  user: UserState;
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly store: Store,
    // private readonly userService: UserService
  ) { }

  ngOnInit(): void {
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

    // this.userState$.subscribe(user => this.user = user);

  }

  toggle(): void {
    this.snav.toggle();
    this.store.dispatch(this.snav.opened ? new OpenSidenav() : new CloseSidenav());
  }

  logout(): void {
    // this.userService.sendLogout();
  }
}
