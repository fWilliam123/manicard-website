import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { UserGroupRoutingModule } from './user-group-routing.module';
import { UserGroupComponent } from './user-group.component';
import { UserGroupDetailDialogComponent } from './components/user-group-detail-dialog/user-group-detail-dialog.component';

@NgModule({
  declarations: [UserGroupComponent, UserGroupDetailDialogComponent],
  imports: [
    CommonModule,
    UserGroupRoutingModule,
    SharedModule
  ]
})
export class UserGroupModule { }
