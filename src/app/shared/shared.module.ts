import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { AuthPageContentComponent } from './components/auth-page-content/auth-page-content.component';

const SHARED_MATERIAL = [
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressSpinnerModule,

  MatCheckboxModule
];

const SHARED_LIBRARIES = [
  ReactiveFormsModule,
  TranslateModule,
  RouterModule
];

const SHARED_COMPONENTS = [
  AuthPageContentComponent,
  PageTitleComponent
];

@NgModule({
  declarations: [
    SHARED_COMPONENTS,
  ],
  exports: [
    SHARED_MATERIAL,
    SHARED_LIBRARIES,
    SHARED_COMPONENTS,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    SHARED_MATERIAL,
    SHARED_LIBRARIES,
  ]
})
export class SharedModule { }
