import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  apiKey: string;

  constructor(private http: Http) {
    this.apiKey = '76f2377f9cc7e86d0bfbb26a111c8fd8';
  }

  multiSearch(query){
    let url = 'https://api.themoviedb.org/3/search/multi?api_key=';
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('query', query);
    search.set('api_key', this.apiKey);
    return this.http.get(url, {search})
      .map((res: Response) => res.json());
  }

}
