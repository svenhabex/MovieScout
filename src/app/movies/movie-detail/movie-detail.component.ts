import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MoviesService } from "../movies.service";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass'],
  providers: [MoviesService]
})
export class MovieDetailComponent implements OnInit {
  movie: Object;
  cast: Array<Object>;
  keywords: Array<Object>;
  images: Array<Object>;
  video: Object;
  similars: Array<Object>;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.moviesService.getMovieDetail(id).subscribe(data => this.movie = data);
      this.moviesService.getMovieCredits(id).subscribe(data => this.cast = data.cast.slice(0,6));
      this.moviesService.getMovieKeywords(id).subscribe(data => this.keywords = data.keywords.slice(0,25));
      this.moviesService.getMovieImages(id).subscribe(data => this.images = data.backdrops.slice(1,6));
      this.moviesService.getMovieVideos(id).subscribe(data => {
        if(data.results && data.results.length) {
          this.video = data.results[0];
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        }
      });
      this.moviesService.getSimilarMovies(id).subscribe(data => this.similars = data.results.slice(0,6));
    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      document.body.scrollTop = 0;
    });
  }

}
