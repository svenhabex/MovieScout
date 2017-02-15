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

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(e){
    this.searchService.multiSearch(e.target.value).subscribe((data) => this.results = data.results);

  }

}
