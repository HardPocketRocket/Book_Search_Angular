import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {BookSearchComponent} from './book-search/book-search.component'
import {BookSearchResultsComponent} from './book-search-results/book-search-results.component'
import {BookDetailsComponent} from './book-details/book-details.component'

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
    redirectTo: '/search',
    pathMatch: 'full'   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
