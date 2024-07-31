import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resourceServerUrl } from '../../../common/auth-key';

@Injectable({
  providedIn: 'root'
})
export class ManageProfileService {

    constructor(private http: HttpClient) { }

    getUser(): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/users/getuser`;
        return this.http.get(recruiterURI, { observe: 'response' })
    }
}
