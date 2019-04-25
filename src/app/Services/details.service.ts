import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DetailsService {
  private detailsUrl: string = 'https://openlibrary.org/api/books?bibkeys=OLID:'
  private options: string = '&jscmd=data&format=json'

  constructor(private http: HttpClient) { }

  getDetails(key: string){
    return this.http.get(this.detailsUrl + key + this.options)
  }

  getCover(key: string): string{
    var coverUrl = "none"
    this.http.get(this.detailsUrl + key + this.options).subscribe(data => {
        for (var key in data) {
          if(typeof data[key].cover != 'undefined'){
            coverUrl = data[key].cover.medium;
          }
          return coverUrl;
        }
      }
    )
  }
}