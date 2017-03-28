import { Component } from '@angular/core';
import { AppHeader } from './header/header.component';
import { BookService} from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: ['BookService']
});

export class AppComponent {
}
