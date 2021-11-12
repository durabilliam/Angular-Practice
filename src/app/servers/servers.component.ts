import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  //usually select by component
  // selector: '[app-servers]',  //selecting by attribute
  // selector: '.app-servers',  //selecting by class
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
