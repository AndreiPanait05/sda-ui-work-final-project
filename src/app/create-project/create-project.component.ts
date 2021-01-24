import { Component, OnInit } from '@angular/core';
import {ProjectRequestDto} from '../model/Project';
import {ProjectService} from '../project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project: ProjectRequestDto = new ProjectRequestDto();

  constructor(
    private projectService: ProjectService,
    private route: Router) { }

  ngOnInit() {
  }

  save() {
    this.projectService.saveProject(this.project).subscribe(data => {
      this.navigateToList();
    });
  }

  navigateToList() {
    this.route.navigate(["/list-projects"]);
  }
}
