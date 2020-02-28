export interface UserCoupon {
  Id: number;
  ShopId: number;
  CouponId: number;
  UserId: number;
  IsPaid: boolean;
  PaymentId?: number;
}
