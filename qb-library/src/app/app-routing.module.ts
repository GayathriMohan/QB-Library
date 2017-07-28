import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooks } from './listbooks/list-books.component'; 
import { BookDetails } from './bookdetails/book-details.component'; 
import { AboutQBlibrary } from './about/about.component'; 
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AddBook } from './addbook/add-book.component';



export const AppRoutes: Routes = [
		{ path: '', redirectTo: '/list', pathMatch: 'full' },
		{path: 'list', component: ListBooks},
		{path: 'book-details/:id', component:BookDetails},
		{path: 'about', component: AboutQBlibrary},
		{path: 'faq', component: FAQComponent},
		{path: 'contact', component: ContactComponent},
		{path: 'add-book', component: AddBook}
	]

@NgModule({
	imports: [RouterModule.forRoot(AppRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
