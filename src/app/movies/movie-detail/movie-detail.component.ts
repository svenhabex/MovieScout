import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass'],
  providers: [MoviesService]
})
export class MovieDetailComponent implements OnInit {
  movie: Object;
  cast: Array<Object>;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.moviesService.getMovieDetail(id).subscribe(data => this.movie = data);
      this.moviesService.getMovieCredits(id).subscribe(data => this.cast = data.cast.slice(0,6));
    });
  }

}
