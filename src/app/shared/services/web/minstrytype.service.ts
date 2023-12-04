import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class MinistryTypeService {


    constructor(private http: HttpClient) { }

    // Function to create a new MinistryType
    createMinistryType(body: any): Observable<any> {
        const createMinsTypeUrl = `${environment.apiUrl}/api/create/ministry-types`
        return this.http.post(createMinsTypeUrl, body)

    }

    // Function to fetch all MinistryTypes
    getSingleMinistryTypes(): Observable<any> {
        const getMinsTypeUrl = `${environment.apiUrl}/api/get/ministry-types`
        return this.http.get<any>(getMinsTypeUrl);
    }
}