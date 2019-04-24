import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

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

  getResults() {

    var promise = new Promise((resolve, reject) => {
      this.http.get(this.searchUrl + this.searchTag + '=' + this.searchValue).subscribe(
      data => {
        this.getPresentableInfo(data.docs)
      })
    resolve();
    });

    return promise;

    // this.http.get(this.searchUrl + this.searchTag + '=' + this.searchValue).subscribe(
    //   data => {
    //     this.getPresentableInfo(data.docs)
    //   })
    //   console.log(this.detailedResults);
  }

  getPresentableInfo(result: Doc[]){
    this.getKeys(result);
    this.detailsService.clearResults();

    for(let i = 0; i < this.resultKeys.length; i++){
      this.detailsService.getDetails(this.resultKeys[i]).subscribe(
      data => {
        for (var key in data) {
          this.detailedResults.push(data[key]);
        }
      })
    }
  }

  getKeys(result: Doc[]){
    this.resultKeys.length = 0;
    for(let i = 0; i < result.length; i++){
      this.resultKeys.push(result[i].text[0])
    }
  }

  test(){
    console.log(this.detailedResults);
  }

  setSearchTag(val: string){
    this.searchTag = val;
  }

  setSearchValue(val: string){
    this.searchValue = val;
  }
}