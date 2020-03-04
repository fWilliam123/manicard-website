import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeManagementComponent } from './trade-management.component';

const routes: Routes = [{
  path: '',
  component: TradeManagementComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeManagementRoutingModule { }
