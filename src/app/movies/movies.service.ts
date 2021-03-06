import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
  apiKey: string;

  constructor(private http: Http) {
    this.apiKey = '76f2377f9cc7e86d0bfbb26a111c8fd8';
  }

  getPopular(){
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getTopRated(){
    let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getNowPlaying(){
    let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getUpcoming(){
    let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getMovieDetail(id){
    let url = 'https://api.themoviedb.org/3/movie/' + id +'?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getMovieCredits(id){
    let url = 'https://api.themoviedb.org/3/movie/' + id +'/credits?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getMovieKeywords(id){
    let url = 'https://api.themoviedb.org/3/movie/' + id +'/keywords?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getMovieImages(id){
    let url = 'https://api.themoviedb.org/3/movie/' + id +'/images?api_key=' + this.apiKey
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getMovieVideos(id){
    let url = 'https://api.themoviedb.org/3/movie/' + id +'/videos?api_key=' + this.apiKey
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  getSimilarMovies(id){
    let url = 'https://api.themoviedb.org/3/movie/' + id +'/similar?api_key=' + this.apiKey
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

}
