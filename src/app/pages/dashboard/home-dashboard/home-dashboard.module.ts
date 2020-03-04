import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActionsProgressItemComponent } from './components/actions-progress-item/actions-progress-item.component';
import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard.component';

@NgModule({
  declarations: [HomeDashboardComponent, ActionsProgressItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeDashboardRoutingModule
  ]
})
export class HomeDashboardModule { }
