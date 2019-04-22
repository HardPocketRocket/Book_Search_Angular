import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Results} from '../Models/Results';

@Injectable()
export class SearchService {

  searchUrl: string = 'https://openlibrary.org/search.json?';

  constructor(private http: HttpClient) { }

  getSearchResults(searchValue: string, currentSearchTag: string) {
    return this.http.get<Results>(this.searchUrl + currentSearchTag + '=' + searchValue)
    .subscribe((res)=>{console.log(res)})
  }
}