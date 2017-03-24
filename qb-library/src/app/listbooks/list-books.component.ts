import { Component,Pipe, PipeTransform } from '@angular/core';
// import {ProductService} from '@angular/core';

import { Input } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'list-books',
  // providers: 'ProductService',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss'],
  
})

export class ListBooks {
}


