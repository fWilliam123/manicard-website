import { DetailCardItem } from './detail-card-item';
import { ObjectType } from '../enums';

export interface DetailAccordionItem {
  total: number;
  objectType: ObjectType;
  detailsCard: DetailCardItem[];
}
