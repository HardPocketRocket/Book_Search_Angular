import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { DetailsService } from './Services/details.service';
import { SearchService } from './Services/search.service';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, BrowserAnimationsModule,],
  declarations: [AppComponent, BookSearchComponent],
  bootstrap: [AppComponent],
  providers: [DetailsService, SearchService]
})
export class AppModule { }
