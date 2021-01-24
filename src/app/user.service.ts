import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserDtoResponse} from './model/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://project-management-sda-api.herokuapp.com/users';
  constructor(private http: HttpClient) {

  }

  saveUser(user: User)  {
    return this.http.post(this.baseUrl, user);
  }

  findEmail(email: string): Observable<UserDtoResponse> {
    return this.http.get<UserDtoResponse>(`${this.baseUrl}?email=${email}`);
  }
}
