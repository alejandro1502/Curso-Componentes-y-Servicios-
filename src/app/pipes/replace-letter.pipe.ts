import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceLetter'
})
export class ReplaceLetterPipe implements PipeTransform {

  transform(value: string): string {

    interface Values {
      [x: string]: string;
    }
    const values: Values = {
      a: '0',
      e:'3',
      i:'1',
      o:'0',
      u:'9',
      S:'6'
    }

    return value
      .split('')
      .map((word: string) => (word in values) ? values[word]: word)
      .join('');
  }

}
