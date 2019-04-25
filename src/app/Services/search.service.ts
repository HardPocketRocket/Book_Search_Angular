import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {Results} from '../Models/Results'
import {Doc} from '../Models/Document'
import {DetailsService} from '../Services/details.service'

@Injectable()
export class SearchService {
  private searchUrl: string = 'https://openlibrary.org/search.json?';
  private searchValue: string = 'default';
  private searchTag: string = 'q';

  private resultKeys: string[] = [];
  private detailedResults: any[] = [];

  constructor(private http: HttpClient, private detailsService: DetailsService) { }

  getResults(){
    return this.http.get(this.searchUrl + this.searchTag + '=' + this.searchValue)
  }

  setSearchTag(val: string){
    this.searchTag = val;
  }

  setSearchValue(val: string){
    this.searchValue = val;
  }
}