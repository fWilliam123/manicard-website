import { Injectable } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { MemberType } from '../../../pages/dashboard/user-management/enums';

type TranslationKey =
  | 'member_type.blue'
  | 'member_type.bronze'
  | 'member_type.gold'
  | 'member_type.silver';

@Injectable({
  providedIn: 'root'
})
export class MemberTypeMappingService {

  translationKey(value: MemberType): TranslationKey {
    switch (value) {
      case MemberType.BLUE:
        return marker('member_type.blue');
      case MemberType.GOLD:
        return marker('member_type.gold');
      case MemberType.SILVER:
        return marker('member_type.silver');
      case MemberType.BRONZE:
        return marker('member_type.bronze');
      default:
        return this._error(value);
    }
  }

  private _error(value: MemberType): never {
    throw new Error(`Invalid member type : ${value}`);
  }

}
