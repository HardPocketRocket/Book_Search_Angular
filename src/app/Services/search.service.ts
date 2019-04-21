import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResults } from '../Model/SearchResults';
import { OpenLibraryConfig } from '../Config/OpenLibraryConfig'

@Injectable()
export class SearchService {
    private static SEARCH_TERMS = ['q', 'title', 'author', 'subject'];
    private static CURRENT_SEARCH_TAG = 'q';
    private static SEARCH_VALUE = 'all'

    constructor(private http: HttpClient) {

    }

    getSearchResults() {
        return this.http.get<SearchResults>(
            OpenLibraryConfig.SEARCH_URL
            + '?'
            + SearchService.CURRENT_SEARCH_TAG
            + '='
            + SearchService.SEARCH_VALUE
        );
    }

    setSearchValue(val: string) {
        SearchService.SEARCH_VALUE = val;
    }

    setSearchTag(val: string) {
        SearchService.CURRENT_SEARCH_TAG = val;
    }
}