import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toStrArray'
})
export class ToStrArrayPipe implements PipeTransform {

  transform(value: string): string[] {
    if (!value) return []
    return value.split(",").map((el: string) => el.trim());
  }
}
