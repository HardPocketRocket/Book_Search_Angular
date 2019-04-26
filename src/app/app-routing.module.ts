import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {BookSearchComponent} from './book-search/book-search.component'

const routes: Routes = [
  {
    path: 'search',
    component: BookSearchComponent
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
