import { Component, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { bookList } from './bookDetails';
import { BookDetails } from '../bookdetails/book-details.component';
import { AppModule } from '../app.module';

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

@Component({
  selector: 'list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooks {
  bookList: Array<any>;

  constructor(private route: Router) {
     this.bookList = bookList;
     // console.log(bookList);
  }

  // bookClick() {
  //    //alert("show details of this book");
  // }
  goToDetails(id) {
     this.route.navigate(['book-details/',id])
  }
}
