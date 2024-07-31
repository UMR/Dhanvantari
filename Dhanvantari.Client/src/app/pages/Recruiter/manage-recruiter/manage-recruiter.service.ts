import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resourceServerUrl } from '../../../common/auth-key';
import { UserModel } from '../../../common/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class ManageRecruiterService {

    constructor(private http: HttpClient) { }

    getAllRecruiter(): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Recruiter/GetRecruiters`;
        return this.http.get(recruiterURI, { observe: 'response' })
    }

    getRecruiterBy(searchParam: any): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Recruiter/GetRecruitersBy/`;
        return this.http.post(recruiterURI, searchParam, { observe: 'response' })
    }

    addRecruiter(user: UserModel): Observable<HttpResponse<any>> {
        const addRecruiterURI = `${resourceServerUrl}/api/v1/Recruiter/CreateRecruiter/`;
        return this.http.post(addRecruiterURI, user, { observe: 'response' })
    }

    updateRecruiter(userId: number, user: UserModel) {
        const addRecruiterURI = `${resourceServerUrl}/api/v1/Recruiter/UpdateRecruiter/` + userId;
        return this.http.put(addRecruiterURI, user, { observe: 'response' })
    }

    deleteRecruiter(deleteUserId: any, updatedUserId: any): Observable<HttpResponse<any>> {
        const deleteRecruiterURI = `${resourceServerUrl}/api/v1/Recruiter/DeleteRecruiter/`;
        return this.http.delete(deleteRecruiterURI + deleteUserId + "/" + updatedUserId, { observe: 'response' })
    }
}
