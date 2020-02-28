import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: AuthenticationComponent,
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'forgot-password',
    component: AuthenticationComponent,
    loadChildren: () => import('./forgot-password/forgot-password.module').then(mod => mod.ForgotPasswordModule)
  },
  {
    path: 'reset-password',
    component: AuthenticationComponent,
    loadChildren: () => import('./reset-password/reset-password.module').then(mod => mod.ResetPasswordModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
