import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const CORE_COMPONENTS = [
  HeaderComponent,
  NavItemComponent,
  ToolbarComponent,
  FooterComponent,
  SideNavComponent,
];

@NgModule({
  declarations: [
    CORE_COMPONENTS
  ],
  exports: [
    CORE_COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forChild(),
  ]
})

export class CoreModule {
  constructor(
    @Optional() @SkipSelf() coreModule: CoreModule
  ) {
    if (coreModule) {
      throw new Error('CoreModule has already been loaded. You should only import core modules in AppModule.');
    }
  }
}
