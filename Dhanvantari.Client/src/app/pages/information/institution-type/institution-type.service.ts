import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resourceServerUrl } from '../../../common/auth-key';

@Injectable({
  providedIn: 'root'
})
export class InstitutionTypeService {

    constructor(private http: HttpClient) { }

    getInstitutionTypes(): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/GetInstitutionTypes`;
        return this.http.get(URI, { observe: 'response' })
    }

    getInstitutionType(id: number): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/GetInstitutionType/${id}`;
        return this.http.get(URI, { observe: 'response' })
    }

    addInstitutionType(emailType: any): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/CreateInstitutionType/`;
        return this.http.post(URI, emailType, { observe: 'response' })
    }

    updateInstitutionType(id: number, emailType: any) {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/UpdateInstitutionType/${id}`;
        return this.http.put(URI, emailType, { observe: 'response' })
    }

    deleteInstitutionType(id: number): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/DeleteInstitutionType/${id}`;
        return this.http.delete(URI, { observe: 'response' })
    }
}
