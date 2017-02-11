import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass'],
  providers: [MoviesService]
})
export class MovieListComponent implements OnInit {
  movies: Array<Object>;
  title: string;
  categorie: string;

  constructor(private moviesService: MoviesService) {
    this.title = "Popular movies";
    this.categorie = "popular";
  }

  ngOnInit() {
    this.moviesService.getPopular().subscribe((data) => this.movies = data.results);
  }

  getPopular(e){
    this.moviesService.getPopular().subscribe((data) => this.movies = data.results);
    this.title = "Popular movies";
    this.categorie = "popular";
  }

  getTopRated(e){
    this.moviesService.getTopRated().subscribe((data) => this.movies = data.results);
    this.title = "Top rated movies";
    this.categorie = "toprated";
  }

  getNowPlaying(){
    this.moviesService.getNowPlaying().subscribe((data) => this.movies = data.results);
    this.title = "Movies now in theaters";
    this.categorie = "nowplaying";
  }

  getUpcoming(){
    this.moviesService.getUpcoming().subscribe((data) => this.movies = data.results);
    this.title = "Upcoming movies";
    this.categorie = "upcoming";
  }

}
