import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SearchService } from '../Services/search.service'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  private searchValue: string;
  form: FormGroup;

  constructor(private searchService: SearchService) { }

  ngOnInit() { }

  onSearchClicked(searchValue: string) {
    this.searchValue = searchValue;

    this.searchService.getSearchResults(this.searchValue).subscribe(data => console.log(data));
  }

}