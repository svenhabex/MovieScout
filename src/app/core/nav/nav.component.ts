import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleOpen(e){
    const menu = <HTMLElement> document.querySelector(".menu");
    menu.classList.toggle('open');
  }


}
