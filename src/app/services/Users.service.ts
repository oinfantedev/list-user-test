import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { IUser, IUsers } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  getUsers():Observable<IUsers> {
    return this.http.get<IUsers>('https://jsonplaceholder.typicode.com/users');
  }
  getUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
