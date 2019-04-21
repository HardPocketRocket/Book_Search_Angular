import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchResultsComponent } from './book-search-results/book-search-results.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { DetailsService } from './Services/details.service';
import { SearchService } from './Services/search.service';

const routes: Routes = [
  {
    path: 'search',
    component: BookSearchComponent
  },
  {
    path: 'results',
    component: BookSearchResultsComponent
  },
  {
    path: 'details',
    component: BookDetailsComponent
  },
  {
    path: '',
    component: BookSearchComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [ AppComponent, HelloComponent, BookDetailsComponent, BookSearchResultsComponent, BookSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DetailsService, SearchService]
})
export class AppModule { }