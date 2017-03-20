import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { AppFooter } from './footer/footer.component';
import { ListBooks } from './listbooks/list-books.component'; 
import { BookDetails } from './bookdetails/book-details.component'; 


const appRoutes: Routes = [
  { path: 'app-root', component: AppComponent},
  { path: 'list-books', component: ListBooks },
  { path: 'book-details', component: BookDetails }
];

@NgModule({
  declarations: [
    AppComponent,
    ListBooks,
    AppHeader,
    AppFooter,
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
