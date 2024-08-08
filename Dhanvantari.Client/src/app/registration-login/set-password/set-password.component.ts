import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/application/auth.service';


@Component({
  selector: 'set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {
  public passpord: string = "";
  public confirmPassword: string = "";


  constructor(private router: Router, private authService: AuthService) {
    //private loginService: LoginService
  }
  ngOnInit() {
    //if (this.loginService.isLoggedIn) {
    //    this.router.navigate(['/']);
    //}
  }

  onNextClick() {
    this.router.navigateByUrl("/basic-info");
  }
}
