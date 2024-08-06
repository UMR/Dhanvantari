import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';

@Injectable()
export class JsonWebTokenInterceptorService implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = JSON.parse(this.localStorage.getItem('userSession'));
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }
}

export let JsonWebTokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JsonWebTokenInterceptorService,
  multi: true
};