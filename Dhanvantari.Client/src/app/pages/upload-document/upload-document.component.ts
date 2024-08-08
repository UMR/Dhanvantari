import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css'],
})
export class UploadDocumentComponent implements OnInit {
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
