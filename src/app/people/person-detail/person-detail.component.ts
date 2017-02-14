import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from "../people.service";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.sass'],
  providers: [ PeopleService ]
})
export class PersonDetailComponent implements OnInit {
  person: Object;
  image: Object;
  cast: Array<Object>;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.peopleService.getPersonDetail(id).subscribe(data => this.person = data);
      this.peopleService.getPersonTaggedImages(id).subscribe(data => this.image = data.results[0]);
      this.peopleService.getPersonKnown(id).subscribe(data => this.cast = data.cast);
    });
  }

}
