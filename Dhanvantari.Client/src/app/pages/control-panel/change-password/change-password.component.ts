import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  public cards: any;

  constructor() {}

  ngOnInit() {
    //this.bindCards();
  }

  clcikMe() {
    this.bindCards();
  }

  bindCards() {
    // this.appSettings
    //   .getCustomerDetails()
    //   .subscribe((cards) => (this.cards = cards));
  }

  // onValueChange($event) {
  //   console.log('onValueChange start');
  //   console.log($event);
  //   alert($event);
  //   console.log('onValueChange end');
  // }
}
