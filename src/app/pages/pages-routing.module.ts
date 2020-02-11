import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../shared/guards/auth.guard';


const routes: Routes = [{
  path: '',
  redirectTo: 'login'
  //component: PagesComponent,
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
