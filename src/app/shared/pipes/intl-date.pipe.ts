import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intlDate'
})
export class IntlDatePipe implements PipeTransform {

  /**
   * Convert date to specific format
   * @param date date
   * @param locales locales
   * @param options options
   */
  transform(date: Date, locales?: string | string[], options?: Intl.DateTimeFormatOptions): string {

    return date.toLocaleDateString(locales, options);
  }

}
