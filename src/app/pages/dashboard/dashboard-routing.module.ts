import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () => import('./home-dashboard/home-dashboard.module').then(mod => mod.HomeDashboardModule)
  },
  {
    path: 'user-management',
    component: DashboardComponent,
    loadChildren: () => import('./user-management/user-management.module').then(mod => mod.UserManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
