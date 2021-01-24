import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {ProjectResponseDto} from '../model/Project';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../user.service';
import {User, UserDtoResponse} from '../model/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-project-detailed-view',
  templateUrl: './project-detailed-view.component.html',
  styleUrls: ['./project-detailed-view.component.css']
})
export class ProjectDetailedViewComponent implements OnInit {

  project = new ProjectResponseDto();
  projectId: number;
  user: UserDtoResponse;

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    this.projectService.getProjectById(this.projectId).subscribe(data => {
      this.project = data;
    });
  }

  findUserByEmail(event: any) {
   this.userService.findEmail(event.target.value).subscribe(data => {
     this.user = data;
   });
  }

  inviteUser(username: string) {
    this.projectService.assignUserToProject(this.project.name, username);
  }

}
