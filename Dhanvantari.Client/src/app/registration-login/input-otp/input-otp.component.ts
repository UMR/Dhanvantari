import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/application/auth.service';


@Component({
  selector: 'input-otp',
  templateUrl: './input-otp.component.html',
  styleUrls: ['./input-otp.component.css']
})
export class InputOtpComponent {
  otp: string;
  showOtpComponent = true;

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  constructor(private router: Router) {
    //private loginService: LoginService
  }
  ngOnInit() {
    //if (this.loginService.isLoggedIn) {
    //    this.router.navigate(['/']);
    //}
  }
  onOtpChange(otp) {
    this.otp = otp;
  }

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }
  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }

  onNextClick() {
    this.router.navigateByUrl("/set-password");
  }
  onPrevClick() {
    this.router.navigateByUrl("/login");
  }
}
