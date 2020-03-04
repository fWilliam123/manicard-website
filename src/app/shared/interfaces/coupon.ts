import { Day, Status } from '../enums';
import { CouponPhoto } from './coupon-photo';
import { CouponProduct } from './coupon-product';

export interface Coupon {
  Id: number;
  ShopId: number;
  ShopName: string;
  Title: string;
  Description: string;
  Value: number;
  DiscountRate: number;
  Status: Status;
  Ranking?: number;
  SellingPrice: number;
  PerceivedAmount: number;
  NbTotalCoupon?: number;
  NbSoldCoupon: number;
  FromDate: Date;
  ToDate: Date;
  ValidDays: Day[];
  Cost: number;
  ExternalId?: number;
  Url: string;
  Keywords: string;
  IsPaid: boolean;
  PaymentId?: number;
  Products: CouponProduct[];
  Photos: CouponPhoto[];
}
