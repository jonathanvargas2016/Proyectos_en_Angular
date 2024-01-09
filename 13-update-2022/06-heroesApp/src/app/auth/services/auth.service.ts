import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3000';
  private user: User | undefined;
  constructor(private http: HttpClient) {}

  login(): Observable<User | undefined> {
    return this.http.get<User | undefined>(`${this.baseUrl}/usuarios/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => {
        localStorage.setItem('token', user!.id.toString());
      })
    );
  }

  get auth() {
    return { ...this.user };
  }

  logout() {
    localStorage.removeItem('token');
    this.user = undefined;
  }

  verifyAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    return this.http.get<User | undefined>(`${this.baseUrl}/usuarios/1`).pipe(
      map((user) => {
        this.user = user;
        return true;
      })
    );
  }
}
