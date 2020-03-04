import { Injectable } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { UserGroupType } from '../../enums';

type TranslationKey =
  | 'user_group_type.worker'
  | 'user_group_type.community_association'
  | 'user_group_type.other'
  | 'user_group_type.sport'
  | 'user_group_type.student';

@Injectable({
  providedIn: 'root'
})
export class UserGroupTypeMappingService {

  translationKey(value: UserGroupType): TranslationKey {
    switch (value) {
      case UserGroupType.WORKER:
        return marker('user_group_type.worker');
      case UserGroupType.COMMUNITY_ASSOCIATION:
        return marker('user_group_type.community_association');
      case UserGroupType.OTHER:
        return marker('user_group_type.other');
      case UserGroupType.SPORT:
        return marker('user_group_type.sport');
      case UserGroupType.STUDENT:
        return marker('user_group_type.student');
      default:
        throw new Error(`Invalid UserGroupType ${value}`);
    }
  }
}
