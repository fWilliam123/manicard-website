import { Component } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { NavItem } from '../../shared/interfaces/nav-item';

marker('menu.home');

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  mode = 'side';
  opened: boolean;

  navItems: NavItem[] = [
    {
      displayName: 'home',
      iconName: 'dashboard',
      route: '/'
    },
  ];

  trackByItem(_: number, navItem: NavItem): string {
    return navItem.route;
  }
}
