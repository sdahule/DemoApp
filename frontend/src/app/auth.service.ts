import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = '/api/login';
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        });

        return this.http.get(this.apiUrl, { headers }).pipe(
            tap(() => {
                this.isAuthenticatedSubject.next(true);
                localStorage.setItem('authHeader', 'Basic ' + btoa(username + ':' + password));
            }),
            catchError(error => {
                this.isAuthenticatedSubject.next(false);
                throw error;
            })
        );
    }

    register(username: string, password: string): Observable<any> {
        return this.http.post('/api/register', { username, password });
    }

    isAuthenticated(): boolean {
        return this.isAuthenticatedSubject.value;
    }

    logout() {
        localStorage.removeItem('authHeader');
        this.isAuthenticatedSubject.next(false);
    }
}
