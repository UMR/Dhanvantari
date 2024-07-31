import { HttpBackend, HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { authCookieKey } from '../auth-key';
import { accessTokenBody, accessTokenFromRefreshTokenBody, accessTokenRevokeUrl, accessTokenUrl, refreshTokenRevokeBody } from "./auth.constant";

function getheaders(): HttpHeaders {
    let headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        //'Authorization': 'Basic YXBpY2xpZW50aWQ6YXBpU2VjcmV0'
    });
    return headers;
}


@Injectable()
export class AuthService {
    http: HttpClient;
    public redirectUrl: string = "";

    constructor(private httpBackend: HttpBackend, private router: Router) {
        this.http = new HttpClient(httpBackend);
    }
    get isLoggedIn(): boolean {
        let tokenInfo = this.getTokenInfo();
        //console.log(tokenInfo);
        //console.log((tokenInfo as any).access_token);
        return (typeof tokenInfo !== 'undefined' && tokenInfo !== null)
      //return (typeof tokenInfo !== 'undefined' && tokenInfo !== null && typeof (tokenInfo as any).access_token !== 'undefined');
    }

    public getTokenInfo() {
        return localStorage.getItem(authCookieKey);
    }

    public get accessToken() {
        const accessTokenInfo = localStorage.getItem(authCookieKey);
        return accessTokenInfo && (accessTokenInfo as any).access_token;
    }

    public get refreshToken() {
        const accessTokenInfo = localStorage.getItem(authCookieKey);
        return accessTokenInfo && (accessTokenInfo as any).refresh_token;
    }

    getToken(http: HttpClient, userID: string, password: string): Observable<any> {
        const body = accessTokenBody.replace('{0}', userID).replace('{1}', password);
        return http.post(accessTokenUrl, body, { headers: getheaders() });
    }
    logout() {
        localStorage.removeItem(authCookieKey);
        const tokenInfo = this.getTokenInfo();
        if (tokenInfo && (tokenInfo as any).refresh_token) {
            const refreshToken = (tokenInfo as any).refresh_token;
            //this.revokeToken(this.http, refreshToken).subscribe(_ => this.logoutNavigate(), err => this.logoutNavigate());
        }
        else {
            localStorage.removeItem(authCookieKey);
            this.logoutNavigate();
        }
    }
    logoutNavigate() {
        this.router.navigate(['/login']).then(isNavigated => {
            if (isNavigated) {

            }
        });
    }
    revokeToken(http: HttpClient, refreshToken: string): any {
        const body = refreshTokenRevokeBody.replace('{0}', refreshToken);
        return http.post(accessTokenRevokeUrl, body, { headers: getheaders() });
    }

    getTokenFromRefreshToken(http: HttpClient, refreshToken: string): any {
        const body = accessTokenFromRefreshTokenBody.replace('{0}', refreshToken);
        return http.post(accessTokenUrl, body, { headers: getheaders() });
    }
}
