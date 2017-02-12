import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  apiKey: string;

  constructor(private http: Http) {
    this.apiKey = '76f2377f9cc7e86d0bfbb26a111c8fd8';
  }

  getPopular(){
    let url = 'https://api.themoviedb.org/3/person/popular?api_key=' + this.apiKey + '&language=en-US&page=1'
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

}
