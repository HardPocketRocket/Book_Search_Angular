import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Results} from '../Models/Results'
import {Doc} from '../Models/Document'
import {DetailsService} from '../Services/details.service'

@Injectable()
export class SearchService {
  searchUrl: string = 'https://openlibrary.org/search.json?';
  searchValue: string = 'default'
  searchTag: string = 'q'

  resultKeys: string[] = [];

  constructor(private http: HttpClient, private detailsService: DetailsService) { }

  getResults() {
    return this.http.get(this.searchUrl + this.searchTag + '=' + this.searchValue);
  }

  getPresentableInfo(result: Doc[]){
    this.getKeys(result);
    this.detailsService.clearResults();
    for(let i = 0; i < this.resultKeys.length; i++){
      this.detailsService.getDetails(this.resultKeys[i])
    }
  }

  getKeys(result: Doc[]){
    this.resultKeys.length = 0;
    for(let i = 0; i < result.length; i++){
      this.resultKeys.push(result[i].text[0])
    }
  }

  setSearchTag(val: string){
    this.searchTag = val;
  }

  setSearchValue(val: string){
    this.searchValue = val;
  }
}