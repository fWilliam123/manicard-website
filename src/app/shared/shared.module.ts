import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AuthPageContentComponent } from './components/auth-page-content/auth-page-content.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DetailAccordionItemComponent } from './components/detail-accordion-item/detail-accordion-item.component';
import { DetailCardItemComponent } from './components/detail-card-item/detail-card-item.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { IntlDateTimePipe } from './pipes/intl-date-time.pipe';
import { IntlDatePipe } from './pipes/intl-date.pipe';

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
  PageTitleComponent,
  CardItemComponent,
  DetailAccordionItemComponent,
  DetailCardItemComponent,
];

const SHARED_PIPES = [
  IntlDatePipe,
  IntlDateTimePipe,
];

const SHARED_DIALOGS = [
  ConfirmDialogComponent
]

@NgModule({
  declarations: [
    SHARED_COMPONENTS,
    SHARED_PIPES,
    SHARED_DIALOGS,
  ],
  exports: [
    SHARED_MATERIAL,
    SHARED_LIBRARIES,
    SHARED_COMPONENTS,
    SHARED_PIPES,
    SHARED_DIALOGS
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    SHARED_MATERIAL,
    SHARED_LIBRARIES,
  ]
})
export class SharedModule { }
