import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home-dashboard/home-dashboard.module').then(mod => mod.HomeDashboardModule)
      },
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.module').then(mod => mod.UserManagementModule)
      },
      {
        path: 'trade-management',
        loadChildren: () => import('./trade-management/trade-management.module').then(mod => mod.TradeManagementModule)
      },
      {
        path: 'product-management',
        loadChildren: () => import('./product-management/product-management.module').then(mod => mod.ProductManagementModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
