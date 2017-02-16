import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { AppFooter } from './footer/footer.component';
import { ListBooks } from './listbooks/list-books.component'; 
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'list-books', component: ListBooks }
];


@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    ListBooks
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
