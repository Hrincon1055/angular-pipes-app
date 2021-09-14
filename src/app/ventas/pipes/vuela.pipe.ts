import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela',
})
export class VuelaPipe implements PipeTransform {
  transform(vuela: boolean = true): string {
    // if (enMayusculas) {
    //   return valor.toUpperCase();
    // } else {
    //   return valor.toLowerCase();
    // }
    return vuela ? 'vueal' : 'no vuela';
  }
}
