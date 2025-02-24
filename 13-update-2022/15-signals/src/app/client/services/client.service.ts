import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable()
export class ClientService {
  private http = inject(HttpClient);
  private baseUrl: string = 'https://reqres.in/api/users';
  constructor() {}

  getUserById(id: number): Observable<User> {
    return this.http
      .get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(map((res) => res.data));
  }
}
