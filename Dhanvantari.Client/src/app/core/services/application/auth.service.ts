import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../helpers/local-storage.service';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  public login(username: string, password: string) {
    var jsonData = [
      {
        "firstName": "Sohel",
        "id": 1,
        "lastName": "Sohel",
        "status": "Active",
        "team": "Root",
        "token": "fake-jwt-token",
        "username": "intelchiprules@yahoo.co.in"
      }
    ]
    this.localStorage.setItem('userSession', JSON.stringify(jsonData));
    return this.http
      .post<any>(`/users/authenticate`, {
        username: username,
        password: password,
      })
      .pipe(
        map((user) => {
          if (user && user.token) {
            this.localStorage.setItem('userSession', JSON.stringify(user));
          }
          //return user;
          this.localStorage.setItem('userSession', JSON.stringify(jsonData));
        })
      );
  }

  logout() {
    this.localStorage.removeItem('userSession');
  }

  public isAuthenticated(): boolean {
    return this.localStorage.getItem('userSession') == null ? false : true;
  }
}
