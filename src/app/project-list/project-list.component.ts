import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { ProjectResponseDto} from '../model/Project';
import {ProjectService} from '../project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Observable<ProjectResponseDto[]>;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.projects = this.projectService.getProjectList();
  }

  seeAgileSprints(id: number) {
    this.router.navigate(["/agile-sprints", id]);
  }

  viewDetails(id: number) {
    this.router.navigate(["/project-info", id]);
  }

  delete(id: number) {
    this.projectService.delete(id).subscribe(data => {
      this.projects = this.projectService.getProjectList();
    });
  }

}
