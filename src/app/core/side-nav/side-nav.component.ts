import { Component } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { NavItem } from '../../shared/interfaces';

marker('menu.home');

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  navItems: NavItem[] = [
    {
      displayName: 'home',
      iconName: 'dashboard',
      route: '/dashboard'
    },
  ];

  trackByItem(_: number, navItem: NavItem): string {
    return navItem.route;
  }
}
