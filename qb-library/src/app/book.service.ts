import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BookService {
    constructor(private http: Http) { }
    getBooks() {
        return this.http.get('./listbooks/book-list.json')
            .map((response: any) => response.json())
            .map((error: any) => console.log(error));
    }
}
