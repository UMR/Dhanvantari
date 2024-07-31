import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
    oldPassword: string = "";
    newPassword: string = "";
    conPassword: string = "";

    onClearClick() {
    }

    onChangeClick() {

    }
}
