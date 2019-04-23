import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import { SearchService } from '../Services/search.service';
import {Results} from '../Models/Results'
import {BookSearchResultsComponent} from '../book-search-results/book-search-results.component'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {
  private searchTag = 'q';
  private results: Observable<Results>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getResults();
  }

  onSearchClicked(searchValue: string) {
    this.searchService.setSearchTag(this.searchTag);
    this.searchService.setSearchValue(searchValue);
  }

  getResults(){
    this.searchService.getResults().subscribe(data => {
      this.data = data,
      console.log(data);
    })
  }
}