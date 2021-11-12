import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  //usually select by component
  // selector: '[app-servers]',  //selecting by attribute
  // selector: '.app-servers',  //selecting by class
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  userName ='';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUserReset() {
    return this.userName = '';
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  allowUserName(){
    if (this.userName.length > 0) {
      return false
    }
    else return true
  }

}
