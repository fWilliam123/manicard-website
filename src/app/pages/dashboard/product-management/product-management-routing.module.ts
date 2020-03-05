import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products'
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule)
  },
  {
    path: 'discounts',
    loadChildren: () => import('./discounts/discounts.module').then(mod => mod.DiscountsModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
