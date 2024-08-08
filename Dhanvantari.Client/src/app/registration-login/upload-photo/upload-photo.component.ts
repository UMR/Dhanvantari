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
      this.router.navigateByUrl("/");
  }
  skipButton() {
    this.router.navigateByUrl("/");
  }
}
