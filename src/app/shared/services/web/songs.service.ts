import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class SongService {


    constructor(private http: HttpClient) { }

    deleteSong(ministryId: any, songId: any): Observable<any> {
        const deleteUrl = `${environment.apiUrl}/api/ministries/delete/${ministryId}/songs/${songId}`;
        return this.http.delete(deleteUrl);
    }
    deleteMinistry(ministryId: any): Observable<any> {
        const deleteUrl = `${environment.apiUrl}/api/ministries/${ministryId}`;
        return this.http.delete(deleteUrl);
    }

    createSong(ministryId: any, body: any) {
        const createUrl = `${environment.apiUrl}/api/ministries/${ministryId}/songs`
        return this.http.post(createUrl, body)
    }

    updateSong(ministryId: any, body: any, songId: any) {
        const updateUrl = `${environment.apiUrl}/api/ministries/update/${ministryId}/songs/${songId}`;
        return this.http.put(updateUrl, body);
    }

    allMin() {
        const getAllUrl = `${environment.apiUrl}/api/get/all-ministries`;
        return this.http.get(getAllUrl, {})
    }

    makeAdmin(userId: any,) {
        const updateUrl = `${environment.apiUrl}/api/user/make-admin/${userId}`;
        return this.http.patch(updateUrl, { makeAdmin: true })
    }
    deleteAdmin(userId: any) {
        const removeUrl = `${environment.apiUrl}/api/user/remove-admin/${userId}`;
        return this.http.delete(removeUrl);
    }

    getAllMinistriesSongs(): Observable<any> {
        const getAllUserUrl = `${environment.apiUrl}/api/all-ministries-songs`;
        return this.http.get<any>(getAllUserUrl);
    }

    getAllMinistration(): Observable<any> {
        const getAllMinsUrl = `${environment.apiUrl}/api/allMinistriesWithSongsAndBackup`
        return this.http.get<any>(getAllMinsUrl);
    }
    getSongsBackup(ministryId: string) {
        const getAlSongsbackuUrl = `${environment.apiUrl}/api/ministries/${ministryId}/songs-backup`
        return this.http.get(getAlSongsbackuUrl);
    }

    existingSong(ministryId: any, songId: any): Observable<any> {
        const url = `${environment.apiUrl}/api/add-existing/${ministryId}/songs/${songId}`;
        return this.http.post<any>(url, {});
    }
}