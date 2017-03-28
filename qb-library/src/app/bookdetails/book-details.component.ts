import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetails {
    books = [];
    constructor (private bookService: BookService) {}
    ngOninit() {
        this.bookService.getBooks().
        .subscribe(resBookData => this.books = resBookData);
    }
}
