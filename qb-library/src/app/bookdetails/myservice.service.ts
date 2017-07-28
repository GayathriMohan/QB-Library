import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';
import { bookList } from '../listbooks/bookDetails';
import{ BookDetails } from './book-details.component';

@Injectable()

export class Myservice {

	getAllTask(): Promise < any > {
        return Promise.resolve(bookList);
	}

    getDetails(id: number): Promise <any> {
    	return this.getAllTask().then(books => {
    		let bookDetail = books.find(b => parseInt(b.id) === id)
    		return bookDetail;
    })
  	}
  
//   getDetails(id) {
//     return Observable.create(observer => {
//       setTimeout(() => {
//       observer.next(bookList.find((bookList) => bookList.id == id))
//       }, 3000);
//     });
// }
}