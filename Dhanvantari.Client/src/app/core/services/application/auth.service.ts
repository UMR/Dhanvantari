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
          return user;
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
