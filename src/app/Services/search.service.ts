import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Results} from '../Models/Results';
import {BookSearchResultsComponent} from '../book-search-results/book-search-results.component'

@Injectable()
export class SearchService {
  searchUrl: string = 'https://openlibrary.org/search.json?';

  private data: any = [];

  constructor(private http: HttpClient, private bookSearchResultsComponent: BookSearchResultsComponent) { }

  getSearchResults(searchValue: string, currentSearchTag: string) {
    this.http.get(this.searchUrl + currentSearchTag + '=' + searchValue)
    .subscribe(data=>{
        this.data = data
        this.updateResults();
    });
  }

  updateResults(){
    console.log("sdfsdf")
    console.log(this.data);
    this.bookSearchResultsComponent.setData(this.data);
  }
}