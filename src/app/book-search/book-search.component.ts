import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import { SearchService } from '../Services/search.service';
import {DetailsService} from '../Services/details.service'
import {Results} from '../Models/Results'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {
  private searchTag = 'q';
  private results: any[] = [];

  constructor(private searchService: SearchService, private detailsService: DetailsService) { }

  ngOnInit() {
    this.getResults();
  }

  onSearchClicked(searchValue: string) {
    this.searchService.setSearchTag(this.searchTag);
    this.searchService.setSearchValue(searchValue);
    this.getResults();
  }

  async getResults(){
    await this.searchService.getResults();
    this.searchService.test();
  }
}