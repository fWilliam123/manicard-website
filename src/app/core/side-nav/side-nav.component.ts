import { Component } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { NavItem } from '../../shared/interfaces';

marker('menu.home');
marker('menu.user_management.title');
marker('menu.user_management.users');
marker('menu.user_management.user_group');

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  navItems: NavItem[] = [
    {
      displayName: 'extract_data',
      iconName: 'assets/images/PNG-04.png',
      route: '/dashboard',
      rappidLink: true
    },
    {
      displayName: 'home',
      iconName: '',
      route: '/dashboard'
    },
    {
      displayName: 'user_management.title',
      iconName: '',
      route: '/dashboard/user-management',
      children: [
        {
          displayName: 'user_management.users',
          iconName: '',
          route: '/dashboard/user-management/users',
        },
      ]
    },
  ];

  trackByItem(_: number, navItem: NavItem): string {
    return navItem.route;
  }
}
