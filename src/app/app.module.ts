import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchResultsComponent } from './book-search-results/book-search-results.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { DetailsServiceService } from './Services/details-service.service';
import { DetailsService } from './Services/details.service';
import { SearchService } from './Services/search.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BookDetailsComponent, BookSearchResultsComponent, BookSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DetailsServiceService, DetailsService, SearchService]
})
export class AppModule { }
