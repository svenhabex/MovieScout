import { Component, OnInit } from '@angular/core';
import { PeopleService }  from "../people.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.sass'],
  providers: [ PeopleService ]
})
export class PersonListComponent implements OnInit {
  people: Array<Object>;
  title: string;

  constructor(private peopleService: PeopleService) {
    this.title = "Popular people";
  }

  ngOnInit() {
    this.peopleService.getPopular().subscribe((data) => this.people = data.results);
  }

}
