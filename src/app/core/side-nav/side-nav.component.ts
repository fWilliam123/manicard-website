import { Component } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { NavItem } from '../../shared/interfaces';

marker('menu.home');
marker('menu.user_management.title');
marker('menu.user_management.users');
marker('menu.user_management.user_group');
marker('menu.trade_management');

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  navItems: NavItem[] = [
    {
      displayName: 'extract_data',
      iconName: 'assets/images/customer-group.png',
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
        {
          displayName: 'user_management.user_group',
          iconName: '',
          route: '/dashboard/user-management/user-group',
        },
      ]
    },
    {
      displayName: 'trade_management',
      iconName: '',
      route: '/dashboard/trade-management'
    },
    {
      displayName: 'product_management.title',
      iconName: '',
      route: '/dashboard/product-management',
      children: [
        {
          displayName: 'product_management.products',
          iconName: '',
          route: '/dashboard/product-management/products',
        },
      ]
    },
  ];

  trackByItem(_: number, navItem: NavItem): string {
    return navItem.route;
  }
}
