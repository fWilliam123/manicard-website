import { Status } from '../enums';

export interface CardItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price?: number;
  percent?: number;
  status: Status;
  icon?: string;
}
