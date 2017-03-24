import { Injectable }     from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';


@Injectable()
export class BookService{
	constructor(private http: Http) {
	     var obj;
	     this.getJSON().subscribe(data => obj=data, error => console.log(error));
	}

    public getJSON(): Observable<any> {
         return this.http.get("./book-list.json")
                         .map((res:any) => res.json())
                         .map((error:any) => console.log(error));
     }
}