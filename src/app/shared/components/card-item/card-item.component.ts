import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { CardItem, ConfirmDialogInput } from '../../interfaces';
import { StatusMappingService } from '../../services';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ObjectType } from '../../enums';
import { UserGroupDetailDialogComponent } from '../../../pages/dashboard/user-management/user-group/components/user-group-detail-dialog/user-group-detail-dialog.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() item: CardItem;
  @Input() objectType: ObjectType;
  @Output() readonly itemRemoved: EventEmitter<string> = new EventEmitter<string>();
  displayableItem: DisplayableItem;

  constructor(
    private readonly statusMappingService: StatusMappingService,
    public readonly translate: TranslateService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayableItem = {
      ...this.item,
      statusClass: this.statusMappingService.statusClass(this.item.status),
      statusTranslationKey: this.statusMappingService.translationKey(this.item.status)
    }
  }

  onOpenDetail(): void {
    this._openCurrentDetailModal();
  }

  openConfirmDialog(): void {

    let ref: MatDialogRef<ConfirmDialogComponent>;

    this.translate.get(marker('user_management.user_group.delete.message'), { groupname: this.item.title })
      .subscribe(_message => {

        const _data: ConfirmDialogInput = {
          id: this.item.id.toString(),
          message: _message,
          titleTranslationKey: marker('user_management.user_group.delete.title'),
          buttonTranslationKey: marker('actions.delete'),
          snackBarMessageKey: marker('snackbar.user_group.delete')
        };

        ref = this.dialog.open<ConfirmDialogComponent, ConfirmDialogInput, string>(ConfirmDialogComponent, {
          data: _data,
          width: '600px',
        });
      });

    ref.afterClosed().pipe(
      filter(id => !!id)
    ).subscribe({
      next: (id): void => {
        this.itemRemoved.emit(id)
      }
    });
  }

  private _openCurrentDetailModal(): void {
    switch (this.objectType) {
      case ObjectType.USER_GROUP:
        this.dialog.open<UserGroupDetailDialogComponent>(UserGroupDetailDialogComponent, {
          width: '50em'
        });
        break;
      default:
        throw new Error(`Invalid ObjectType ${this.objectType}`)
    }
  }

}

interface DisplayableItem extends CardItem {
  statusClass: string;
  statusTranslationKey: string;
}
