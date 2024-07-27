import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lkrFormatter'
})
export class LkrFormatterPipe implements PipeTransform {

  transform(value: number): string {
    return `LKR ${value} /=`;
  }

}
