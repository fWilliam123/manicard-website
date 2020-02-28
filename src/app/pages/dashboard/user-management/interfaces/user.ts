import { MemberType } from '../enums';
import { Status, AccountType } from '../../../../shared/enums';

export interface User {
  Id: number;
  Code: string;
  Title: string;
  Name: string;
  Firstname: string;
  Lastname: string;
  Email: string;
  Phone: string;
  MemberType: MemberType;
  Password: string;
  Status: Status;
  RegisteredDate?: Date;
  Banned?: boolean;
  BannedReason: string;
  AccountType: AccountType;
  ModifyDate?: Date;
  CreateDate?: Date;
  BarcodeImage: Blob[];
  CompletionPercent: number;
  AvailableCredit: number;
  IsOnline: boolean;
}
