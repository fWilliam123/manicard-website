import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CardItemComponent } from './components/card-item/card-item.component';
import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard.component';

@NgModule({
  declarations: [HomeDashboardComponent, CardItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeDashboardRoutingModule
  ]
})
export class HomeDashboardModule { }
