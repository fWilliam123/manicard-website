import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductDetailDialogComponent } from './components/product-detail-dialog/product-detail-dialog.component';

@NgModule({
  declarations: [ProductsComponent, ProductDetailDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
