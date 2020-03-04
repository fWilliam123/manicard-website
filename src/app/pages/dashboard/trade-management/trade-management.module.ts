import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradeManagementRoutingModule } from './trade-management-routing.module';
import { TradeManagementComponent } from './trade-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { TradeDetailDialogComponent } from './components/trade-detail-dialog/trade-detail-dialog.component';

@NgModule({
  declarations: [TradeManagementComponent, TradeDetailDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    TradeManagementRoutingModule
  ]
})
export class TradeManagementModule { }
