export interface UserCredit {
  Id: number;
  UserId: number;
  CreditId: number;
  IsPaid: boolean;
  PaymentId?: number;
  Cost: number;
  Description: string;
}
