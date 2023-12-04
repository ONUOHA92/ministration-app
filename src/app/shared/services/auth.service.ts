import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

import { CookieService } from '../services/cookie.service';
import { User } from './../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User;

    access: Access;

    constructor(private http: HttpClient, private cookieService: CookieService) {

        this.access = this.setAccess();
    }

    public USER_ACCESS = "user";
    public CHAT_ACCESS = "chat";
    public JOB_ACCESS = "job";
    public MESSAGE_ACCESS = "message";
    public REPORT_ACCESS = "report";
    public SETTINGS_ACCESS = "settings";
    public WEBSITE_ACCESS = "website";
    public CALENDAR_ACCESS = "calendar";
    public ACTIVITY_ACCESS = "activity";
    public ASSIGNED_ACCESS = "assigned";

    check(key: string) {

        let user: any = this.currentUser();
        return this.control(user, key)
    }


    control(user: any, key: string) {

        try {

            let role = user.user.roles[key];

            if (role) {
                return role;
            }
            return new Control();

        } catch (e) {
            return {
                read: false,
                write: false,
                execute: false
            }
        }
    }

    parseAccess(user: any) {

        let access: Access = new Access();

        let param: any = {}
        param.user = {}
        param.user.roles = user

        console.log("Result Parser: ", param, user)

        access.activity = this.control(param, this.ACTIVITY_ACCESS)
        access.assigned = this.control(param, this.ASSIGNED_ACCESS)
        access.calendar = this.control(param, this.CALENDAR_ACCESS)
        access.chat = this.control(param, this.CHAT_ACCESS)
        access.job = this.control(param, this.JOB_ACCESS)
        access.message = this.control(param, this.MESSAGE_ACCESS)
        access.report = this.control(param, this.REPORT_ACCESS)
        access.settings = this.control(param, this.SETTINGS_ACCESS)
        access.user = this.control(param, this.USER_ACCESS)
        access.website = this.control(param, this.WEBSITE_ACCESS)
        // console.log("Priviledges", user, access)

        return access;
    }

    // ACCESS_CONTROLLED = this.MENUITEMS;
    setAccess() {

        let access: Access = new Access();

        access.activity = this.check(this.ACTIVITY_ACCESS)
        access.assigned = this.check(this.ASSIGNED_ACCESS)
        access.calendar = this.check(this.CALENDAR_ACCESS)
        access.chat = this.check(this.CHAT_ACCESS)
        access.job = this.check(this.JOB_ACCESS)
        access.message = this.check(this.MESSAGE_ACCESS)
        access.report = this.check(this.REPORT_ACCESS)
        access.settings = this.check(this.SETTINGS_ACCESS)
        access.user = this.check(this.USER_ACCESS)
        access.website = this.check(this.WEBSITE_ACCESS)

        return access;
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {

        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }

        this.user = JSON.parse(this.cookieService.getCookie('currentUser'));

        return this.user;
    }



    /** Registration serveice */

    registerUser(userData: any) {
        return this.http.post<any>(`${environment.apiUrl}/api/user/signup`, userData)
            .pipe(map(data => {
                console.log(data, 'this is registrarion data')

                if (data.user && data.token) {
                    return data; // Return the response data if it contains user and token
                } else {
                    throw new Error('Registration response is missing user or token');
                }
            }))

    }




    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/user/login`, { email, password })
            .pipe(map(data => {

                //  console.log("Logg response here::", data.data, data.data.access_token)
                console.log("Logg response here::", data, data.user, data.token)
                // login successful if there's a jwt token in the response
                if (!data.user) {
                    return;
                }

                let response = data

                if (response.token) {
                    this.cookieService.setCookie('token', response.token, 1)
                }
                if (response.user) {
                    this.user = response.user
                    this.cookieService.setCookie('currentUser', JSON.stringify(response.user), 1)
                }

                return response;
            }));
    }

    isLoggedIn() {

        return !!this.token();
    }

    token() {

        let response = this.cookieService.getCookie("user_pass")
        if (!response) {
            return false;
        }
        let access = JSON.parse(response);
        if (!access) {
            return false;
        }
        return access.token
    }

    identifier() {

        try {
            let response = this.cookieService.getCookie("user_pass")
            if (!response) {
                return false;
            }
            let access = JSON.parse(response);
            if (!access) {
                return false;
            }
            return access.user.identifier
        } catch (e) {
            return false;
        }
    }

    imageExists(url, callback) {

        var img = new Image();
        img.onload = function () { callback(true); };
        img.onerror = function () { callback(false); };
        img.src = url;
    }

    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        this.user = null;
    }
}

export class Access {
    is_Admin(is_Admin: any): import("./nav.service").Menu[] {
        throw new Error('Method not implemented.');
    }

    public activity: Control
    public assigned: Control
    public calendar: Control
    public chat: Control
    public job: Control
    public message: Control
    public report: Control
    public settings: Control
    public user: Control
    public website: Control
}

export class Control {
    public read: boolean = false
    public write: boolean = false
    public execute: boolean = false
}