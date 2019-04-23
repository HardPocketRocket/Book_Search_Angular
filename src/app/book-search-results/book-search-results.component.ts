import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { SearchService } from '../Services/search.service'

@Component({
  selector: 'app-book-search-results',
  templateUrl: './book-search-results.component.html',
  styleUrls: ['./book-search-results.component.css'],
})

export class BookSearchResultsComponent implements OnInit {
  private data: any = [];

 //constructor(private searchService: SearchService) { }

  constructor(private ref: ChangeDetectorRef, private searchService: SearchService) {
    console.log('Hello PhotoComponent Component');  
    setInterval(() => {
      this.ref.detectChanges();
    }, 500);  
  }

  ngOnInit() {
    this.searchService.getSearchResults().subscribe(data => {
      this.data.push(data);
      console.log(data);
    })
  }

  updateResults(){
    this.searchService.getSearchResults().subscribe(data => {
      this.data.push(data);
      console.log(data);
    })
  }
}