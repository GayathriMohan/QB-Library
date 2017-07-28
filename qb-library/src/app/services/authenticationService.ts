import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class authService {
  // Observable
  private login = new BehaviorSubject<boolean>;
  // Observable
  loggedIn$ = this.login.asObservable();
  // service command
  userLoggedIn(log: boolean) {
    this.login.next(log);
  }
}