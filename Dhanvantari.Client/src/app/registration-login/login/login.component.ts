import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { AuthService } from '../../core/services/application/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginId: string = "";
  public password: string = "";
  public showPasswordFiled: boolean = false;


  constructor(private router: Router, private authService: AuthService) {
    //private loginService: LoginService
  }
  ngOnInit() {
    //if (this.loginService.isLoggedIn) {
    //    this.router.navigate(['/']);
    //}
  }

  onNextClick() {
    if (this.loginId == '01734258666') {
      this.showPasswordFiled = true;
    }
    else {
      console.log("otp")
      this.router.navigateByUrl("/input-otp");
    }
  }

  onPrevClick() {
    this.showPasswordFiled = false;
  }

  onLoginClick() {
    this.authService.login(this.loginId, this.password)
      .subscribe(res => {
        /*localStorage.setItem(authCookieKey, JSON.stringify(res))*/
        this.router.navigateByUrl("/");
      },
        err => {
          console.log(err);
          this.router.navigateByUrl("/");
        },
        () => {
          //if (this.loginService.redirectUrl) {
          //    this.router.navigateByUrl(this.loginService.redirectUrl);
          //    this.loginService.redirectUrl = "";
          //}
          //else {
          //    this.router.navigate(['/']);
          //}
        }
      );
  }
}
