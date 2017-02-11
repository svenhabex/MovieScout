import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [MoviesService]
})
export class HomeComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

}
