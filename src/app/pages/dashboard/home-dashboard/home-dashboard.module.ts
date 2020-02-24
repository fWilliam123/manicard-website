import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [CardItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeDashboardRoutingModule
  ]
})
export class HomeDashboardModule { }
