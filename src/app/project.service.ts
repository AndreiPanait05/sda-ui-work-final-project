import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectRequestDto, ProjectResponseDto} from './model/Project';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = 'https://project-management-sda-api.herokuapp.com/projects';

  constructor(private http: HttpClient) { }

  saveProject(project: ProjectRequestDto): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, project);
  }

  getProjectById(id: number): Observable<ProjectResponseDto> {
    return this.http.get<ProjectResponseDto>(`${this.baseUrl}/${id}`);
  }

  assignUserToProject(projectName: string, username: string) {
      const obj = this.http.get<any>(`${this.baseUrl}/assign-users?projectName=${projectName}&username=${username}`)
        .subscribe(data => {
          console.log(data);
        }, error => {
          console.log(error);
        });
      console.log(obj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getProjectList(): Observable<ProjectResponseDto[]> {
    return this.http.get<ProjectResponseDto[]>(`${this.baseUrl}`);
  }
}
