import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent {
  messageInvisable = true;
  clicks = [1];

  constructor() { }

  onShowMessage() {
    this.messageInvisable = !this.messageInvisable
    this.clicks.push(this.clicks.length + 1);
  }

}
