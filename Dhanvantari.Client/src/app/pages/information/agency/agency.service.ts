import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resourceServerUrl } from '../../../common/auth-key';
import { AgencyModel } from '../../../common/models/agency.model';

@Injectable({
    providedIn: 'root'
})
export class AgencyService {

    constructor(private http: HttpClient) { }

    getAllAgency(): Observable<HttpResponse<any>> {
        const agencyURI = `${resourceServerUrl}/api/v1/Agencies/GetAgencies`;
        return this.http.get(agencyURI, { observe: 'response' })
    }

    deleteAgency(agencyId: any): Observable<HttpResponse<any>> {
        const deleteAgencyURI = `${resourceServerUrl}/api/v1/Agencies/DeleteAgency/`;
        return this.http.delete(deleteAgencyURI + agencyId, { observe: 'response' })
    }

    addAgency(agency: AgencyModel): Observable<HttpResponse<any>> {
        const addAgencyURI = `${resourceServerUrl}/api/v1/Agencies/CreateAgency/`;
        return this.http.post(addAgencyURI, agency, { observe: 'response' })
    }

    updateAgency(agencyId: number, agency: AgencyModel) {
        const addAgencyURI = `${resourceServerUrl}/api/v1/Agencies/UpdateAgency/` + agencyId;
        return this.http.put(addAgencyURI, agency, { observe: 'response' })
    }

    updateAgencyStatus(agencyId: number, agency: any) {
        const addAgencyURI = `${resourceServerUrl}/api/v1/Agencies/UpdateAgencyStatus/` + agencyId;
        return this.http.put(addAgencyURI, agency, { observe: 'response' })
    }
}
