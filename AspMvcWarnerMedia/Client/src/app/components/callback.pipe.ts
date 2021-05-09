import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'callback',
  pure: false
})

export class CallbackPipe implements PipeTransform {

  transform(items: any[], callback: (item: any, filter: string) => boolean, filter: any): any {

    if (!items || !callback) {

      return items;
    }

    return items.filter(item => callback(item, filter));
  }

  //transform(items: any[], callback: (args: any[]) => boolean): any {

  //  if (!items || !callback) {

  //    return items;
  //  }

  //  return items.filter(item => callback(item));
  //}
}
