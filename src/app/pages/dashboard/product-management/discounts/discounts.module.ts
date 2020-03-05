import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DiscountsRoutingModule } from './discounts-routing.module';
import { DiscountsComponent } from './discounts.component';

@NgModule({
  declarations: [DiscountsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DiscountsRoutingModule
  ]
})
export class DiscountsModule { }
