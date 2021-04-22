import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: any[],
    filterString: any[],
    propName: any,
    propName2: string,
    // filterString1: any[],
    // propName3: any,
    // propName4: string
  ): any[] {
    const resultArray = [];
    if (value.length === 0 || filterString.length === 0 || propName2 === '') {
      return value;
    }
    console.log(filterString, ' ', propName, ' ', propName2);
    for (let i = 0; i < filterString.length; i++) {
      for (const item of value) {
        // let abc = propName.propName2
        if (item[propName][propName2] === filterString[i]) {
          console.log('filterString', filterString[i]);
          resultArray.push(item);
        }
      }
    }
    return resultArray;
    
  }
}
