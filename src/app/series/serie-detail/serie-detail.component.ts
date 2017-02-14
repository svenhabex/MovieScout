import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from "../series.service";

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.sass'],
  providers: [ SeriesService ]
})
export class SerieDetailComponent implements OnInit {
  serie: Object;
  cast: Array<Object>;
  keywords: Array<Object>;
  images: Array<Object>;
  similars: Array<Object>;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.seriesService.getSerieDetail(id).subscribe(data => console.log(data));
      this.seriesService.getSerieDetail(id).subscribe(data => this.serie = data);
      this.seriesService.getSerieCredits(id).subscribe(data => this.cast = data.cast.slice(0,6));
      this.seriesService.getSerieKeywords(id).subscribe(data => this.keywords = data.results.slice(0,25));
      this.seriesService.getSerieImages(id).subscribe(data => this.images = data.backdrops.slice(1,6));
      this.seriesService.getSimilarSeries(id).subscribe(data => this.similars = data.results.slice(0,6));
    });

  }

}
