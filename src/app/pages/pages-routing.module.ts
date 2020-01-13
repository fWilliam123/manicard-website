import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  // canActivate: [AuthGuard],
}, /* {
  path: 'hacker-view',
  loadChildren: () => import('./hacker-view/hacker-view.module').then(mod => mod.HackerViewModule),
  canLoad: [AuthGuard],
}*/];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
