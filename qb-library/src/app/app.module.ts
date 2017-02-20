import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { AppFooter } from './footer/footer.component';
import { ListBooks } from './listbooks/list-books.component'; 
import { BookDetails } from './bookdetails/book-details.component'; 
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'list-books', component: ListBooks },
  { path: 'book-details', component: BookDetails }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    ListBooks,
    BookDetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,AppHeader,AppFooter]
})
export class AppModule { }
