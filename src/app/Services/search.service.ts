import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  searchUrl: string = 'https://openlibrary.org/search.json?';
  searchValue: string = 'default'
  searchTag: string = 'q'

  constructor(private http: HttpClient) { }

  getResults() {
    return this.http.get(this.searchUrl + this.searchTag + '=' + this.searchValue);
  }

  setSearchTag(val: string){
    this.searchTag = val;
  }

  setSearchValue(val: string){
    this.searchValue = val;
  }
}