import { Injectable } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Status } from '../../enums';

type StatusClass =
  | 'inactive-status'
  | 'pending-status'
  | 'archiving-status'
  | 'archived-status'
  | 'undefined-status'
  | 'active-status';

type TranslationKey =
  | 'status_type.active'
  | 'status_type.archived'
  | 'status_type.archiving'
  | 'status_type.pending'
  | 'status_type.inactive'
  | 'status_type.undefined';

@Injectable({
  providedIn: 'root'
})
export class StatusMappingService {

  statusClass(value: Status): StatusClass {
    switch (value) {
      case Status.ACTIVE:
        return `active-status`;
      case Status.PENDING:
        return `pending-status`;
      case Status.ARCHIVED:
        return `archived-status`;
      case Status.ARCHIVING:
        return `archiving-status`;
      case Status.UNDEFINED:
        return `undefined-status`;
      case Status.INACTIVE:
        return `inactive-status`;
      default:
        return this._error(value);
    }
  }

  translationKey(value: Status): TranslationKey {
    switch (value) {
      case Status.ACTIVE:
        return marker('status_type.active');
      case Status.ARCHIVED:
        return marker('status_type.archived');
      case Status.ARCHIVING:
        return marker('status_type.archiving');
      case Status.PENDING:
        return marker('status_type.pending');
      case Status.UNDEFINED:
        return marker('status_type.undefined');
      case Status.INACTIVE:
        return marker('status_type.inactive');
      default:
        return this._error(value);
    }
  }

  private _error(value: Status): never {
    throw new Error(`Invalid status type : ${value}`);
  }
}
