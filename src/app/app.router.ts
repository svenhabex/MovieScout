import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { SerieListComponent } from './series/serie-list/serie-list.component';
import { PersonListComponent } from './people/person-list/person-list.component';

export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'series', component: SerieListComponent },
  { path: 'people', component: PersonListComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
