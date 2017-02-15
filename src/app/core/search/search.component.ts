import { Component, OnInit } from '@angular/core';
import { SearchService } from "./search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [ SearchService ]
})
export class SearchComponent implements OnInit {
  results: Array<Object>;
  searchElem;
  query: String;

  constructor(private searchService: SearchService) {
    this.query = "";
  }

  ngOnInit() {
    this.searchElem = <HTMLElement> document.querySelector(".search");
  }

  search(e){
    if(this.query){
      this.searchService.multiSearch(this.query).subscribe((data) => this.results = data.results);
      const results = <HTMLElement> this.searchElem.querySelector(".results");
      if (results) results.style.display = "block";
    }else{
      const results = <HTMLElement> this.searchElem.querySelector(".results");
      results.style.display = "none";
    }
  }

  close(e){
    const results = <HTMLElement> this.searchElem.querySelector(".results");
    this.query = "";
    results.style.display = "none";
  }

}
