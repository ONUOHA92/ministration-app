import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class BackupService {


    constructor(private http: HttpClient) { }

    deleteBackup(ministryId: any, backupId: any): Observable<any> {
        const deleteUrl = `${environment.apiUrl}/api/ministries/delete/${ministryId}/backup/${backupId}`;
        return this.http.delete(deleteUrl);
    }


    createBackup(ministryId: any, body: any) {
        const createUrl = `${environment.apiUrl}/api/ministries/${ministryId}/backup`
        return this.http.post(createUrl, body)
    }

    updateBackup(ministryId: any, body: any, backupId: any) {
        const updateUrl = `${environment.apiUrl}/api/ministries/update/${ministryId}/backup/${backupId}`;
        return this.http.put(updateUrl, body);
    }

    getUsers(): Observable<any[]> {
        const getUserURl = `${environment.apiUrl}/api/user/users`
        return this.http.get<any[]>(getUserURl);
    }


    deleteUserId(userId): Observable<any> {
        const deleteUrl = `${environment.apiUrl}/api/user/delete/${userId}`;
        return this.http.delete(deleteUrl);
    }
}