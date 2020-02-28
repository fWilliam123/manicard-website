import { Injectable, OnDestroy } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl implements OnDestroy {

  private readonly translateSubscription: Subscription;

  constructor(
    private readonly translateService: TranslateService
  ) {
    super();

    this.translateSubscription = this.translateService.stream([
      'paginator.itemsPerPageLabel',
      'paginator.nextPageLabel',
      'paginator.previousPageLabel',
      'paginator.firstPageLabel',
      'paginator.lastPageLabel',
    ]).subscribe((values: Map<string, string>) => {
      this.itemsPerPageLabel = values['paginator.itemsPerPageLabel'];
      this.nextPageLabel = values['paginator.nextPageLabel'];
      this.previousPageLabel = values['paginator.previousPageLabel'];
      this.firstPageLabel = values['paginator.firstPageLabel'];
      this.lastPageLabel = values['paginator.lastPageLabel'];

      this.changes.next();
    });
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }

  /**
   * A label for the range of items within the current page and the length of the whole list.
   *
   * 1 – 10 of 100
   * https://github.com/angular/components/blob/master/src/material/paginator/paginator-intl.ts#L41
   */
  getRangeLabel = (page: number, pageSize: number, length: number): string => {
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return this.translateService.instant('paginator.getRangeLabel', {
      startIndex: startIndex + 1,
      endIndex,
      length,
    });
  }

}
