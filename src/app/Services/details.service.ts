import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsService {
  detailsUrl: string = 'https://openlibrary.org/api/books?bibkeys=OLID:'
  options: string = '&jscmd=data&format=json'

  detailedResult: any[] = [];

  constructor(private http: HttpClient) { }

  getDetails(key: string){
    return this.http.get(this.detailsUrl + key + this.options).subscribe(
      data => {
        this.detailedResult.push(data)
        console.log(this.detailedResult);
      }
    )
  }

  clearResults(){
    this.detailedResult.length = 0;
  }

}