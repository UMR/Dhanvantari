import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resourceServerUrl } from '../../../common/auth-key';

@Injectable({
    providedIn: 'root'
})
export class PositionLicenseRequirementService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/PositionLicenseRequirements/GetAll`;
        return this.http.get(URI, { observe: 'response' })
    }

    getById(id: number): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/PositionLicenseRequirements/GetById/${id}`;
        return this.http.get(URI, { observe: 'response' })
    }

    create(emailType: any): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/PositionLicenseRequirements/Create/`;
        return this.http.post(URI, emailType, { observe: 'response' })
    }

    update(id: number, emailType: any) {
        const URI = `${resourceServerUrl}/api/v1/PositionLicenseRequirements/Update/${id}`;
        return this.http.put(URI, emailType, { observe: 'response' })
    }

    delete(id: number): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/PositionLicenseRequirements/Delete/${id}`;
        return this.http.delete(URI, { observe: 'response' })
    }

}
