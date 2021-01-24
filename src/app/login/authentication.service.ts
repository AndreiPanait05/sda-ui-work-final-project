import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public static AUTHENTICATED_USER = 'authenticatedUser';
  public static BASIC_AUTH_FLAG_B64 = 'basicAuthFlag';
  baseUrl = 'http://localhost:8081/users';


  public username: string;
  public password: string;


  constructor(private http: HttpClient) { }

  authenticationService(username: string, password: string) {
    return this.http.get(`${this.baseUrl}/logged-user`, {
      headers : {
        Authorization: this.createAuthorizationHeader(username, password)
      }
    }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      sessionStorage.setItem(AuthenticationService.AUTHENTICATED_USER, username);
    }));
  }

  createAuthorizationHeader(username: string, password: string) {
    const authFlag = 'Basic ' + btoa(username + ':' + password);
    sessionStorage.setItem(AuthenticationService.BASIC_AUTH_FLAG_B64, authFlag);
    return authFlag;
  }

  getBasicAuthFlagFromSessionStorage() {
    return sessionStorage.getItem(AuthenticationService.BASIC_AUTH_FLAG_B64);
  }
}
