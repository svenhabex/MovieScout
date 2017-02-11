import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SeriesService {
  apiKey: string;

  constructor(private http: Http) {
    this.apiKey = '76f2377f9cc7e86d0bfbb26a111c8fd8';
  }

  getPopular(){
    let url = 'https://api.themoviedb.org/3/tv/popular?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getTopRated(){
    let url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getOnTheAir(){
    let url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

}
