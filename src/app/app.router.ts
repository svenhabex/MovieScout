import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { SerieListComponent } from './series/serie-list/serie-list.component';
import { PersonListComponent } from './people/person-list/person-list.component';
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { SerieDetailComponent } from "./series/serie-detail/serie-detail.component";
import { PersonDetailComponent } from "./people/person-detail/person-detail.component";

export const router: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'series', component: SerieListComponent },
  { path: 'tv/:id', component: SerieDetailComponent },
  { path: 'people', component: PersonListComponent },
  { path: 'person/:id', component: PersonDetailComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
