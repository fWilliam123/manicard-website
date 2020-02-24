import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavItem } from '../../shared/interfaces';
import { NavService } from '../../shared/services';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class NavItemComponent implements OnInit {

  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;

  constructor(
    public readonly navService: NavService,
    public readonly router: Router,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    // private readonly snackBar: EasySnackBarService,
    private readonly translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.navService.currentUrl$.subscribe((url: string = '') => {
      if (this.item.route && url.includes(this.item.route)) {
        this.expanded = true;
        this.ariaExpanded = this.expanded;
      }
    });

    this.registerIcon();
  }

  onDisabledContainerClick(): void {
    // this.translate.get('snackbar.link_soon').subscribe(value => this.snackBar.soon(value));
  }

  onParentContainerClick(): void {
    this.expanded = !this.expanded;
  }

  trackByChildren(_: number, navItem: NavItem): string {
    return navItem.route;
  }

  private registerIcon(): void {
    this.matIconRegistry.addSvgIcon(
      'dashboard',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu-dashboard.svg')
    );
  }

}
