import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { UserGroupDetailDialogComponent } from '../../../pages/dashboard/user-management/user-group/components/user-group-detail-dialog/user-group-detail-dialog.component';
import { ObjectType } from '../../enums';
import { CardItem, ConfirmDialogInput } from '../../interfaces';
import { StatusMappingService } from '../../services';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TradeDetailDialogComponent } from '../../../pages/dashboard/trade-management/components/trade-detail-dialog/trade-detail-dialog.component';

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

  onOpenConfirmDialog(): void {
    const data: ConfirmDialogData = this._getConfirmDialogData();
    this._openConfirmDialog(data);
  }

  private _getConfirmDialogData(): ConfirmDialogData {
    switch (this.objectType) {
      case ObjectType.USER_GROUP:
        return {
          snackBarMessageKey: marker('snackbar.user_group.delete'),
          messageTranslationKey: marker('user_management.user_group.delete.message'),
          messageKey: 'groupname',
          messageValue: this.item.title,
          titleTranslationKey: marker('user_management.user_group.delete.title')
        }
      // TODO: Set to correct Trade management
      case ObjectType.CATEGUORY:
        return {
          snackBarMessageKey: marker('snackbar.trade_management.delete'),
          messageTranslationKey: marker('trade_management.delete.message'),
          messageKey: 'trade',
          messageValue: this.item.title,
          titleTranslationKey: marker('trade_management.delete.title')
        }
      default:
        this._error();
    }
  }

  private _openConfirmDialog(data: ConfirmDialogData): void {

    let ref: MatDialogRef<ConfirmDialogComponent>;
    const translateObject: TranslateObject = {};

    translateObject[data.messageKey] = data.messageValue;

    this.translate.get(data.messageTranslationKey, translateObject)
      .subscribe(_message => {

        const _data: ConfirmDialogInput = {
          id: this.item.id.toString(),
          message: _message,
          titleTranslationKey: data.titleTranslationKey,
          buttonTranslationKey: marker('actions.delete'),
          snackBarMessageKey: data.snackBarMessageKey
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
      case ObjectType.CATEGUORY:
        this.dialog.open<TradeDetailDialogComponent>(TradeDetailDialogComponent, {
          width: '50em'
        });
        break;
      default:
        this._error();
    }
  }

  private _error(): void {
    throw new Error(`Invalid ObjectType ${this.objectType}`)
  }

}

interface DisplayableItem extends CardItem {
  statusClass: string;
  statusTranslationKey: string;
}

interface ConfirmDialogData {
  snackBarMessageKey: string;
  titleTranslationKey: string;
  messageTranslationKey: string;
  messageKey: string;
  messageValue: string | number;
}

interface TranslateObject {
  [key: string]: string | number
}
