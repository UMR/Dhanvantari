import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resourceServerUrl } from '../../../common/auth-key';
import { ManageRole } from '../../../common/models/manage-role.model';

@Injectable({
  providedIn: 'root'
})
export class ManageRoleService {

    constructor(private http: HttpClient) { }

    getManageRole(): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Role/GetRole`;
        return this.http.get(recruiterURI, { observe: 'response' })
    }

    getManageRoleBy(searchParam: any): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Role/GetRoleBy/`;
        return this.http.post(recruiterURI, searchParam, { observe: 'response' })
    }

    addRole(user: ManageRole): Observable<HttpResponse<any>> {
        const addRecruiterURI = `${resourceServerUrl}/api/v1/Role/CreateRole/`;
        return this.http.post(addRecruiterURI, user, { observe: 'response' })
    }

    updateRole(userId: number, user: ManageRole) {
        const addRecruiterURI = `${resourceServerUrl}/api/v1/Role/UpdateRole/` + userId;
        return this.http.put(addRecruiterURI, user, { observe: 'response' })
    }

    deleteRole(deleteUserId: any, updatedUserId: any): Observable<HttpResponse<any>> {
        const deleteRecruiterURI = `${resourceServerUrl}/api/v1/Role/DeleteRole/`;
        return this.http.delete(deleteRecruiterURI + deleteUserId + "/" + updatedUserId, { observe: 'response' })
    }
}
