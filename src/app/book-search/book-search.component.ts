import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  private isDetails = false;

  private results: Results;
  private details: Book;

  constructor(private searchService: SearchService, private detailsService: DetailsService) { }

  ngOnInit() {
    this.onSearchClicked("Harry Potter")
  }

  onBookClicked(key: string){
    this.isDetails = true;
    console.log(key);
    this.detailsService.getDetails(key).subscribe(data => {
      for(var key in data){
        this.details = data[key];
      }
      console.log(this.details);
    })
  }

  onBackClicked(){
    this.isDetails = false;
  }

  onSearchClicked(searchValue: string) {
    this.isDetails = false;
    this.searchService.setSearchTag(this.searchTag);
    this.searchService.setSearchValue(searchValue);
    this.searchService.getResults().subscribe(data => {
      this.results = data;

      for (let i = 0; i < this.results.docs.length; i++) {
        this.detailsService.getDetails(this.results.docs[i].text[0]).subscribe(data => {
          for (var key in data) {
            if (typeof data[key].cover != 'undefined' && typeof data[key].cover.medium != 'undefined') {
              this.results.docs[i].coverUrl = data[key].cover.medium;
            }
            else{
              this.results.docs[i].coverUrl = 'https://i.imgur.com/J5LVHEL.jpg'
            }
          }
        })    
      }
      console.log(this.results)
    })
  }
}