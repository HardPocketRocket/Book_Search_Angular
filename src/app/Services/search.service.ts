import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  searchUrl: string = 'https://openlibrary.org/search.json?';

  constructor(private http: HttpClient) { }

  getSearchResults(searchValue: string, currentSearchTag: string) {
    return this.http.get(this.searchUrl + currentSearchTag + '=' + searchValue);
  }
}