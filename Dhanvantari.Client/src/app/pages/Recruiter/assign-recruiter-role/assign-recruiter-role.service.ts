import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resourceServerUrl } from '../../../common/auth-key';
import { UserRankModel } from '../../../common/models/user-rank.model';

@Injectable({
    providedIn: 'root'
})
export class AssignRecruiterRoleService {

    constructor(private http: HttpClient) { }

    getActiveUsers(): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Users/GetActiveUser/`;
        return this.http.get(recruiterURI, { observe: 'response' })
    }

    getAllRank(): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Rank/GetRanks`;
        return this.http.get(recruiterURI, { observe: 'response' })
    }

    getRankByUser(userId: number): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Rank/GetRankByUser/` + userId;
        return this.http.get(recruiterURI, { observe: 'response' })
    }

    addRankByUser(userRank: any): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Rank/AddUserRank/`;
        return this.http.post(recruiterURI, userRank, { observe: 'response' })
    }

    updateRankByUser(userId: number, userRank: any): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Rank/UpdateUserRank/` + userId;
        return this.http.put(recruiterURI, userRank, { observe: 'response' })
    }

    deleteRankByUser(userId: number): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Rank/GetRankByUser/` + userId;
        return this.http.get(recruiterURI, { observe: 'response' })
    }

    getAllRole(): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Role/GetRole`;
        return this.http.get(recruiterURI, { observe: 'response' })
    }
    getRoleByUser(userId: number): Observable<HttpResponse<any>> {
        const recruiterURI = `${resourceServerUrl}/api/v1/Role/GetRoleByUser/` + userId;
        return this.http.get(recruiterURI, { observe: 'response' })
    }
}
