import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/pages/models/user';
import { Md5 } from 'ts-md5';
import moment from 'moment';
import { Role } from '@app/app.routes';

// https://www.techiediaries.com/login-signup-api-angular-17/
// https://stackblitz.com/edit/jwt-express?file=index.js
// https://rxjs.dev/deprecations/subscribe-arguments

export const API_BASE = "http://localhost:8001/api/";
export const HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };

export const API_URL = {
    login: `${API_BASE}login`,
    fritzbox: `${API_BASE}fritzbox`
}


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    protected http = inject(HttpClient);

    private currentUser = signal<User | null>(null);
    public readonly currentUser$ = this.currentUser.asReadonly();
    public changeCurrentUser(value: User | null) {
        this.currentUser.set(value);
    }

    public isAdmin(){
        if (!this.currentUser$()) return false;
        return (this.currentUser$()?.Accesslevel === Role.Admin) ? true : false;
    }

    /* IS LOGGED IN */

    public autoLogin() {
        if (!this.currentUser$() && localStorage.getItem('currentUser') !== null) this.changeCurrentUser(JSON.parse(localStorage.getItem('currentUser') || ''));
        if (localStorage.getItem('currentUser') === null) this.changeCurrentUser(null);
    }

    private getExpiration() {
        const expiration = localStorage.getItem("expires_at") || '';
        if (!expiration) return;
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    /* LOGIN */

    public httpReq_authenticate(username: string, password: string) {
        const url = API_URL.login;
        const options = { headers: HEADERS };
        const md5password = Md5.hashStr(password);
        const body = { username, password: md5password };

        return this.http.post<{ idToken: string, user: User, expiresIn: string }>(url, body, options)
            .subscribe({
                next: (data) => {
                    const { idToken, user, expiresIn } = data;
                    // console.log("idtoken", idToken);
                    // console.log("user", user);
                    // console.log("expiresIn", expiresIn);
                    if (idToken) {
                        this.setSession(idToken, expiresIn);
                        this.login(user);
                    }
                },
                error: (err) => console.log("error", err.status),
                complete: () => console.log("complete")
            });
    }

    private setSession(idToken: string, expiresIn: string): void {
        const expiresAt = moment().add(expiresIn, 'second');
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
        localStorage.setItem('id_token', idToken);
    }

    private login(user: User) {
        if (!user) return;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.changeCurrentUser(user);
    }

    /* LOGOUT */

    public logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem('currentUser');
        this.changeCurrentUser(null);
    }
}