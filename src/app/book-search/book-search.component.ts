import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { SearchService } from '../Services/search.service';
import { DetailsService } from '../Services/details.service'
import { Results } from '../Models/Results'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {
  private searchTag = 'q';

  private results: Results;

  constructor(private searchService: SearchService, private detailsService: DetailsService) { }

  ngOnInit() {

  }

  onSearchClicked(searchValue: string) {
    this.searchService.setSearchTag(this.searchTag);
    this.searchService.setSearchValue(searchValue);
    this.searchService.getResults().subscribe(data => {
      this.results = data;

      for (let i = 0; i < this.results.docs.length; i++) {
        this.detailsService.getDetails(this.results.docs[i].text[0]).subscribe(data => {
          for (var key in data) {
            if (typeof data[key].cover != 'undefined') {
              this.results.docs[i].coverUrl = data[key].cover.medium;
            }
            else{
              this.results.docs[i].coverUrl = 'none'
            }
          }
        })    
      }
    })
  }
}