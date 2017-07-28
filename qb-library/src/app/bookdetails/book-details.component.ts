import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
// import  { bookList } from '../listbooks/bookDetails';
import { ActivatedRoute } from '@angular/router';
import { Myservice } from './myservice.service';
import 'rxjs/add/operator/switchMap';
// import { ListBooks } from '../listbooks/list-books.component';

@Component({
	  selector: 'book-details',
	  templateUrl: './book-details.component.html',
	  styleUrls: ['./book-details.component.scss']
	})
	export class BookDetails implements OnInit{
		private id: number;
		private bookDetails : any;
		constructor (private myservice: Myservice, private route: ActivatedRoute) {
			this.bookDetails = {};
		}

		ngOnInit() {
			this.route.params.subscribe(params=>{
				this.id = +params['id'];
			})
	    	this.myservice.getDetails(this.id).then(
	    		(res)=>{
	    			this.bookDetails = res;
	    		}
	    		);
		}

}
