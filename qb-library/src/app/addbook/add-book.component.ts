import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { authService } from '../services/authenticationService';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBook {
	private categories: string[] = [];
	private languages: string[] = [];
	private category: string;
	private language: string;
	private isDisabled: boolean;
	subscription: Subscription;
	constructor(private authService: authService){
		this.categories = ["Inspirational Fiction", "Novel", "Short Story", "Drama", "Poem", "Travelogue"];
		this.languages = ["English", "Malayalam", "Hindi", "Tamil"];
		this.category = this.categories[0];
		this.language = this.languages[0];
		this.isDisabled = true;
	}
	ngOnInit() {
    	this.subscription = this.authService.loggedIn$
       		.subscribe(item => this.isDisabled = !item)
	}
	ngOnDestroy() {
	    // prevent memory leak when component is destroyed
	    this.subscription.unsubscribe();
	}

}

