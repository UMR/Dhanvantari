import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./common/service/auth.service";
import { LoginService } from "./login/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private loginService: LoginService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }
        if (state.url !== '' && state.url !== '/') {
            this.loginService.redirectUrl = state.url;
        }
        this.authService.logout();
        return false;
    }
}