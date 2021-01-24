import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AgileSprintDtoRequest, AgileSprintDtoResponse} from './model/AgileSprint';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgileSprintsService {

  baseUrl = 'https://project-management-sda-api.herokuapp.com/agile-sprints';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:max-line-length
  // json-backend : { "id": "1", "name":"abc" , "status":"enabled" } | pentru exemplu consideram ca obiectul in backend se numeste UserStatusDtoResponse
  // pentru colectarea datelor definim un UserStatusDtoResponse in Angular care contine field-uri din backend cu acelasi nume.
//   export class UserStatusDtoResponse {
//       id: string;
//       name: string;
//       status: string;
//  }
  // Ce face Angular? Se uita la response-ul din backend care e json-ul afisat mai sus
  // si ia field cu field si compara cu UserStatusDtoResponse din angular. Daca cheile corespund, adica
  // daca in json-backend exista o cheie cu numele "id" si acest field exista si in UserStatusDtoResponse din angular,
  // atunci se creeaza o instanta noua de obiectul UserStatusDtoResponse si se populeaza cu valorile din
  // json-ul primit din backend.
  //
  getAgileSprintsByProjectId(projectId: number): Observable<AgileSprintDtoResponse[]> {
    return this.http.get<AgileSprintDtoResponse[]>(`${this.baseUrl}?projectId=${projectId}`);
  }

  //   export class UserStatusDtoResponse {
  //       id: string;
  //       name: string;
  //       status: string;
  //  }
  // Pentru POST Angular se ocupa de conversia intre UserStatusDtoResponse
  // si un obiect de tip json.
  // De exemplu UserStatusDtoResponse un json ar putea arata
  // { "id" : "ceva-valoare", "name" : "ceva-valoare", "status" : "ceva-valoare" }
  //
  //
  saveAgileSprint(agileSprint: AgileSprintDtoRequest): Observable<AgileSprintDtoRequest> {
    return this.http.post<AgileSprintDtoRequest>(`${this.baseUrl}`, agileSprint);
  }

}

