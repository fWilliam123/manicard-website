import { Status, UserGroupType } from '../../../../shared/enums';
import { UserGroupUser } from './user-group-user';

export interface UserGroup {
  Id: number;
  OwnerId: number;
  OwnerCode: string;
  OwnerPhone: string;
  OwnerEmail: string;
  Name: string;
  Description: string;
  GroupeType: UserGroupType;
  Address: string;
  City: string;
  PostalCode: string;
  Region: string;
  Country: string;
  Status: Status
  FavoriteCategoryIds: number[];
  Members: UserGroupUser[];
}
