import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: "sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor() {

  }

  @Output() onSideMenuClicked = new EventEmitter<any>();

  ngOnInit() { }

  //menuHide(e) {
  //  e.preventDefault();
  //  this.onSideMenuClicked.emit();
  //}
}
