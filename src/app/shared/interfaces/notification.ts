import { CustomerType, NotificationTargetType, Status } from '../enums';

export interface Notification {
  Id: number;
  Title: string;
  Message: string;
  IsPaid: boolean;
  Cost: number;
  ShopId?: number;
  ShopName: string;
  ProductId?: number;
  OwnerId: number;
  CreateDate: Date;
  FromDate: Date;
  EndDate: Date;
  Status: Status;
  Moderated: boolean;
  CanBeModified: boolean;
  NbPotentialCustomers: number;
  UserGroupId?: number;
  TargetType: NotificationTargetType;
  CustomerType?: CustomerType;
  PaymentId?: number;
}
