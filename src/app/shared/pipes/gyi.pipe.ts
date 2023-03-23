import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GYI'
})
export class GYIPipe implements PipeTransform {
  //GOOGLE YEAR INCOME AS FOR 2021

  transform(euros?: number): number | undefined {
    if (euros == undefined) return undefined
    return Math.round(euros / 256700000 * 1000) / 1000;
  }
}
