import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SearchService } from '../Services/search.service'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {
  private searchTag = 'q';
  private searchValue: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() { }

  onSearchClicked(searchValue: string) {
    this.searchValue = searchValue;
    console.log(this.searchService.getSearchResults(this.searchValue,this.searchTag));
    this.searchService.getSearchResults(this.searchValue,this.searchTag).subscribe(data => console.log(data));
  }
}