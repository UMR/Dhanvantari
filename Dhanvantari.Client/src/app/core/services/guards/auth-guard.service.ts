import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../application/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    console.log(!this.auth.isAuthenticated())
    if (this.auth.isAuthenticated()) {
      console.log('AuthGuardService');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
