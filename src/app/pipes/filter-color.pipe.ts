import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColor',
})
export class FilterColorPipe implements PipeTransform {
  transform(
    value: any[],
    filterString: any[],
    propName: any,
    propName2: string,
  ): any[] {
    const resultArray = [];
    if (value.length === 0 || filterString.length === 0 || propName2 === '') {
      return value;
    }
    console.log(filterString, ' ', propName, ' ', propName2);
    for (let i = 0; i < filterString.length; i++) {
      for (const item of value) {
        if (item[propName][propName2] === filterString[i]) {
          console.log('filterString', filterString[i]);

          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }
}
