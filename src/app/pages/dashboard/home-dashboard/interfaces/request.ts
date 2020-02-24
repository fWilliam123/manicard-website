import { RequestType, ObjectType } from '../../../../shared/enums';

export interface Request {
  Id: number;
  RequestType: RequestType
  FromType: ObjectType;
  FromId: number;
  FromName: string;
  ToType: ObjectType;
  ToId: number;
  OnType?: ObjectType;
  OnId?: number;
  Title: string;
  Message: string;
  MustMakeDecision: boolean;
  Decision?: boolean;
  ExpirationDate?: Date;
  FromDate?: Date;
  ToDate?: Date;
  Completed: boolean;
}
