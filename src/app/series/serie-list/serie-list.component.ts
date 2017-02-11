import { Component, OnInit } from '@angular/core';
import { SeriesService } from "../series.service";

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.sass'],
  providers: [ SeriesService ]
})
export class SerieListComponent implements OnInit {
  series: Array<Object>;
  title: string;
  categorie: string;

  constructor(private seriesService: SeriesService) {
    this.title = "Popular series";
    this.categorie = "popular";
  }

  ngOnInit() {
    this.seriesService.getPopular().subscribe((data) => this.series = data.results);
  }

  getPopular(){
    this.seriesService.getPopular().subscribe((data) => this.series = data.results);
    this.title = "Popular movies";
    this.categorie = "popular";
  }

  getTopRated(){
    this.seriesService.getTopRated().subscribe((data) => this.series = data.results);
    this.title = "Top rated series";
    this.categorie = "toprated";
  }

  getOnTheAir(){
    this.seriesService.getOnTheAir().subscribe((data) => this.series = data.results);
    this.title = "Airing now";
    this.categorie = "ontheair";
  }

}
