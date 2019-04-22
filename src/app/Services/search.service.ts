import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  private static SEARCH_TAGS = ['q', 'title', 'author', 'subject'];
  private static CURRENT_SEARCH_TAG = 'q';

  searchUrl: string = 'https://openlibrary.org/search.json?';

  constructor(private http: HttpClient) { }

  getSearchResults(searchValue: string) {
    return this.http.get(this.searchUrl + SearchService.CURRENT_SEARCH_TAG + '=' + searchValue);
  }

  setCurrentSearchTag(val: string) {
    SearchService.CURRENT_SEARCH_TAG = val;
  }

  getSearchTags() {
    return SearchService.SEARCH_TAGS;
  }
}