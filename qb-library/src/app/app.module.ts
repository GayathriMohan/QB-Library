import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  { bookList } from './listbooks/bookDetails';
import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { AppFooter } from './footer/footer.component';
import { ListBooks } from './listbooks/list-books.component'; 
import { BookDetails } from './bookdetails/book-details.component'; 
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Myservice } from './bookdetails/myservice.service';
import { AboutQBlibrary } from './about/about.component'; 
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddBook } from './addbook/add-book.component';



// const appRoutes: Routes = [
//   { 
//     // path: 'list-books', component: ListBooks,
//    children: [ 
//           { path: 'book-details', component: BookDetails }
//          ] } 
//   // { path: 'book-details', component: BookDetails,
//   //   children: [ 
//   //         { path: 'bookdetails', component: BookDetails }
//   //        ] }
// ];

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    ListBooks,
    BookDetails,
    AboutQBlibrary,
    FAQComponent,
    ContactComponent,
    LoginComponent,
    AddBook
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    // RouterModule.forRoot(AppRoutes)
  ],
  providers: [Myservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
