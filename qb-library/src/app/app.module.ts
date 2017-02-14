import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { AppFooter } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,AppHeader,AppFooter]
})
export class AppModule { }
