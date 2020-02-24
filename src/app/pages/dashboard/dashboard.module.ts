import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

@NgModule({
  declarations: [DashboardComponent, HomeDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    SharedModule,

    // Material
    MatSidenavModule,
    MatListModule,
  ]
})
export class DashboardModule { }
