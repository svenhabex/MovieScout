import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from "./app.router";

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { SearchComponent } from './core/search/search.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { SerieListComponent } from './series/serie-list/serie-list.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';
import { PersonListComponent } from './people/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieListComponent,
    SerieDetailComponent,
    SerieListComponent,
    PersonDetailComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
