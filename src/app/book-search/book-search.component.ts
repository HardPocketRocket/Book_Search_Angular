import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import { SearchService } from '../Services/search.service';
import {Results} from '../Models/Results'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {
  private searchTag = 'q';
  private results;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getResults();
  }

  onSearchClicked(searchValue: string) {
    this.searchService.setSearchTag(this.searchTag);
    this.searchService.setSearchValue(searchValue);
    this.getResults();
  }

  getResults(){
    this.searchService.getResults().subscribe(data => {
      this.results = data,
      console.log(data);
    })
  }
}