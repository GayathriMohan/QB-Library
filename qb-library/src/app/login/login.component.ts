import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { loginList } from './loginDetails';
import { authService } from '../services/authenticationService';


@Component({
  selector: 'login-section',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	@Output()
  	loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

	private data: any = {};
	private userList = [];	
	private auth: boolean = false;
	
 	constructor(private http: Http, private authService: authService) {
 		this.userList = loginList;
 	}
 	validateLogin(): void {
 		let user = this.userList.find(b=>b.email===this.data.email&&b.password===this.data.password);
 		if(user){
 			this.auth = true;
 		}else{
 			alert("Email or password incorrect");
 			this.auth = false;
 		}
 		this.authService.userLoggedIn(this.auth);
 		
 	}
}

 

