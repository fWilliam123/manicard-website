import { Status, DiscountTargetType, Day } from '../enums';

export interface Discount {
  Id: number;
  ShopId: number;
  ShopName: string;
  OwnerId: number;
  Title: string;
  Description: string;
  DiscountTargetType: DiscountTargetType;
  DiscountRate: number;
  Status: Status;
  NbTotal?: number;
  FromDate: Date;
  ToDate: Date;
  ValidDays: Day[];
  IsPaid: boolean;
  PaymentId?: number;
  Cost: number;
}
