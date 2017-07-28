import { Component ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeader {
	@Output()
  	loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor(){

	}

	handleUserUpdated(data){
		this.loggedIn.emit(data);
	}
}
