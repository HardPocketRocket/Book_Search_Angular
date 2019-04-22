import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search-results',
  templateUrl: './book-search-results.component.html',
  styleUrls: ['./book-search-results.component.css']
})

export class BookSearchResultsComponent implements OnInit {
  private data: any = [];

  constructor() { }

  ngOnInit() {
  }

  setData(data){
    this.data = data;
    console.log(this.data.numFound);
    console.log(this.data.docs);
  }
}