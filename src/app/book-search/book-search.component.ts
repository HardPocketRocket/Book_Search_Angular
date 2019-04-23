import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SearchService } from '../Services/search.service';
import {BookSearchResultsComponent} from '../book-search-results/book-search-results.component'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {
  private searchTag = 'q';

  constructor(private searchService: SearchService,private  bookSearchResultsComponent: BookSearchResultsComponent) { }

  ngOnInit() { }

  onSearchClicked(searchValue: string) {
    this.searchService.setSearchTag(this.searchTag);
    this.searchService.setSearchValue(searchValue);
    this.bookSearchResultsComponent.updateResults();
  }
}