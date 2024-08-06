import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';

import { AppSettings } from '../../../../core/services/application/app-settings.service';
@Component({
  selector: 'dashboard-control-panel',
  templateUrl: './dashboard-control-panel.component.html',
  styleUrls: ['./dashboard-control-panel.component.css'],
})
export class DashbardControlPanelComponent implements OnInit {
  public cards: any;

  constructor(private appSettings: AppSettings) {}

  ngOnInit() {
    this.bindCards();
  }

  clcikMe() {
    this.bindCards();
  }

  bindCards() {
    this.appSettings
      .getCustomerDetails()
      .subscribe((cards) => (this.cards = cards));
  }

  onValueChange($event) {
    console.log('onValueChange start');
    console.log($event);
    alert($event);
    console.log('onValueChange end');
  }
}
