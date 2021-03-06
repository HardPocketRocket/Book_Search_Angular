import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsService {
  private detailsUrl: string = 'https://openlibrary.org/api/books?bibkeys=OLID:'
  private options: string = '&jscmd=data&format=json'

  constructor(private http: HttpClient) { }

  getDetails(key: string){
    return this.http.get(this.detailsUrl + key + this.options)
  }
}