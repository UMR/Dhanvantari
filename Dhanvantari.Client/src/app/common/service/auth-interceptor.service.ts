import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { catchError, finalize, Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { SpinnerService } from '../component/spinner/spinner.service';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    private totalRequests = 0;

    constructor(private injector: Injector, private spinnerService: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authService = this.injector.get(AuthService);
        const token = authService.getTokenInfo();

        this.totalRequests++;
        this.spinnerService.setLoading(true);

        if (token) {
            // If we have a token, we set it to the header
            let tokenInfo = JSON.parse(token);
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${(tokenInfo as any).access_token}` }
            });
        }

        return next.handle(request).pipe(
            finalize(() => {
                this.totalRequests--;
                if (this.totalRequests == 0) {
                    setTimeout(() => {
                        this.spinnerService.setLoading(false);
                    }, 500);
                }
            }),
            catchError((err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        authService.logout();
                        // redirect user to the logout page
                    }
                }
                return throwError(err);
            })
        );
    }
}
