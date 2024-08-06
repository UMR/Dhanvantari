import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { AlertType, Alert } from '../../models/all';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() alert: Alert;

  constructor() {}

  ngOnInit() {}

  public getAlertBoxCss() {
    switch (this.alert.alertType) {
      case AlertType.Success:
        return 'alert alert-success alert-dismissible';
      case AlertType.Error:
        return 'alert alert-danger alert-dismissible';
      case AlertType.Info:
        return 'alert alert-info alert-dismissible';
      case AlertType.Warning:
        return 'alert alert-warning alert-dismissible';
    }
  }

  public getAlertIconCss() {
    switch (this.alert.alertType) {
      case AlertType.Success:
        return 'icon fa fa-check';
      case AlertType.Error:
        return 'icon fa fa-ban';
      case AlertType.Info:
        return 'icon fa fa-info';
      case AlertType.Warning:
        return 'icon fa fa-warning';
    }
  }
  
  public showAlert() {
    return this.alert === undefined || this.alert === null ? false : true;
  }
}
