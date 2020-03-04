import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ManagementPartnerService } from '../../../shared/services';
import { ActionProgressItem, Request } from './interfaces';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  items: ActionProgressItem[];
  selectedIndex: number;

  constructor(private readonly managementPartnerService: ManagementPartnerService) { }

  ngOnInit(): void {
    // TODO: Delete on prod
    this.items = [
      { id: 1, description: 'commerce', total: 20 },
      { id: 2, description: 'produits', total: 30 },
      { id: 3, description: 'coupons', total: 40 },
      { id: 4, description: 'rabais', total: 60 },
      { id: 5, description: 'notifications', total: 20 },
      { id: 6, description: 'users', total: 20 }
    ]

    this.selectedIndex = 0;
    this.managementPartnerService.getActionsInProgress().pipe(
      map<Request[], ActionProgressItem[]>(data =>
        data.map<ActionProgressItem>(item => ({
          id: item.Id,
          description: item.Title,
          total: item.Id
        })))
    ).subscribe({
      next: (data) => {
        this.items = data;
      }
    })
  }

  onSelectedItemChange(index: number): void {
    this.selectedIndex = index;
  }

  trackByActionsProgressItem(_: number, item: ActionProgressItem): number {
    return item.id
  }

}
