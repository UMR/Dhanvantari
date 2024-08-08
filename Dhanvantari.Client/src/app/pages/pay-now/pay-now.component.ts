import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pay-now',
  templateUrl: './pay-now.component.html',
  styleUrls: ['./pay-now.component.css'],
})
export class PayNowComponent implements OnInit {
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
