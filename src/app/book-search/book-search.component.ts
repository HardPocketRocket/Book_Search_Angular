import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';

import { SearchService } from '../Services/search.service';
import { DetailsService } from '../Services/details.service'
import { Results } from '../Models/Results'
import {Cover} from '../Models/Book'
import {AuthorInfo} from '../Models/Book'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {
  private searchTag = 'q';
  private isDetails = false;
  private hasAuthorUrl = true;

  private noCoverUrl = 'https://i.imgur.com/J5LVHEL.jpg';

  private results: Results;
  private details: Book;

  constructor(private searchService: SearchService, private detailsService: DetailsService, private location: Location) { }

  ngOnInit() {
    this.onSearchClicked("Harry Potter")
  }

  onBookClicked(key: string){
    this.isDetails = true;
    this.detailsService.getDetails(key).subscribe(data => {
      
      //take the data out of the unique key in a uniform way
      for(var key in data){
        this.details = data[key];
      }

      //if no cover attribute is returned by the API then I provide a default one 
      if(typeof this.details.cover === 'undefined'){
        this.details.cover = <Cover>{large: this.noCoverUrl}
      }

      //if no author attribute is returned by the API then I provide a default one
      if(typeof this.details.authors === 'undefined'){
        var authorInfo: AuthorInfo = [];
        authorInfo.push(<AuthorInfo>{name: 'Unknown', url: 'Unknown'})
        this.details.authors = authorInfo;
        this.hasAuthorUrl = false;
      }
      else{
        this.hasAuthorUrl = true;
      }
      this.location.go(this.details.key);
    })
  }

  //when back is clicked I clear the details page
  onBackClicked(){
    this.isDetails = false;
    this.details = null;
    this.location.go('/search');
  }

  onSearchClicked(searchValue: string) {
    this.isDetails = false;
    this.searchService.setSearchTag(this.searchTag);
    this.searchService.setSearchValue(searchValue);

    this.searchService.getResults().subscribe(data => {
      this.results = data;

      //Perform some formatting on the search results
      for (let i = 0; i < this.results.docs.length; i++) {

        //To display the covers in the search results we have to do another API query and get the covers,
        //then we store them in a new attribute in our model
        this.detailsService.getDetails(this.results.docs[i].text[0]).subscribe(data => {
          for (var key in data) {

            //if no cover is returned by the API we set a default
            if (typeof data[key].cover != 'undefined' && typeof data[key].cover.medium != 'undefined') {
              this.results.docs[i].coverUrl = data[key].cover.medium;
            }

            //Set the returned cover attribute to our search result
            else{
              this.results.docs[i].coverUrl = this.noCoverUrl
            }
          }
        })

        //if no author is defined for a result in the API we set a default one
        if(typeof this.results.docs[i].author_name === 'undefined'){
            this.results.docs[i].author_name = ['Unknown']
        }    
      }
      console.log(this.results)
    })
  }
}