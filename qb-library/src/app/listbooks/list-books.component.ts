import { Component } from '@angular/core';

@Component({
  selector: 'list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss'],
  
})

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    if (!value) {
      return value;
    } 

    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    } 
    return keys;
  } 
} 

export class ListBooks {
}
