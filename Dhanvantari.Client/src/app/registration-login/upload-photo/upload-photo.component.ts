import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/application/auth.service';

@Component({
  selector: 'upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {
  public loginId: string = "";
  public password: string = "";


  constructor(private router: Router, private authService: AuthService) {
    //private loginService: LoginService
  }
  ngOnInit() {
    //if (this.loginService.isLoggedIn) {
    //    this.router.navigate(['/']);
    //}
  }

  onNextClick() {
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
  skipButton() {
    this.authService.login(this.loginId, this.password)
      .subscribe(res => {
       
        this.router.navigateByUrl("/");
      },
        err => {
          console.log(err);
          this.router.navigateByUrl("/");
        },
        () => {
         
        }
      );
  }
}
