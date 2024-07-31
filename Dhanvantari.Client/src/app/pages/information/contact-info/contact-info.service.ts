import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resourceServerUrl } from '../../../common/auth-key';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

    constructor(private http: HttpClient) { }

    getContactInformations(): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/GetInstitutionTypes`;
        return this.http.get(URI, { observe: 'response' })
    }

    getContactInfo(id: number): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/GetInstitutionType/${id}`;
        return this.http.get(URI, { observe: 'response' })
    }

    addContactInfo(contactInfo: any): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/CreateInstitutionType/`;
        return this.http.post(URI, contactInfo, { observe: 'response' })
    }

    updateContactInfo(id: number, contactInfo: any) {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/UpdateInstitutionType/${id}`;
        return this.http.put(URI, contactInfo, { observe: 'response' })
    }

    deleteContactInfo(id: number): Observable<HttpResponse<any>> {
        const URI = `${resourceServerUrl}/api/v1/InstitutionTypes/DeleteInstitutionType/${id}`;
        return this.http.delete(URI, { observe: 'response' })
    }
}
