import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
    selector: 'app-list-books',
    // providers: 'ProductService',
    templateUrl: './list-books.component.html',
    styleUrls: ['./list-books.component.scss'],
})

export class ListBooks implements OnInit {
    books = [];
    constructor(private bookService: BookService) {}
    ngOninit() {
         this.bookService.getBooks()
        .subscribe(resBookData => this.books = resBookData);
    }
}


