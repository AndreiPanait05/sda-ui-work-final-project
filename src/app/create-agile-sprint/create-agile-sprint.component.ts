import { Component, OnInit } from '@angular/core';
import {AgileSprintDtoRequest} from '../model/AgileSprint';
import {AgileSprintsService} from '../agile-sprints.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AgileStoryDtoResponse} from '../model/AgileStory';
import {AgileStoriesService} from '../agile-stories.service';

@Component({
  selector: 'app-create-agile-sprint',
  templateUrl: './create-agile-sprint.component.html',
  styleUrls: ['./create-agile-sprint.component.css']
})
export class CreateAgileSprintComponent implements OnInit {

  agileSprint: AgileSprintDtoRequest = new AgileSprintDtoRequest();
  agileStories: Observable<AgileStoryDtoResponse[]>;
  projectId: number;
  constructor(
    private agileSprintService: AgileSprintsService,
    private agileStoriesService: AgileStoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    this.agileStories = this.agileStoriesService.getAgileStoriesByName('', this.projectId);
  }

  saveAgileSprint() {
    this.projectId = this.route.snapshot.params["id"];
    this.agileSprint.projectId = this.projectId;
    this.agileSprintService.saveAgileSprint(this.agileSprint).subscribe(data => {
      this.router.navigate(["/agile-sprints", this.projectId]);
    });
  }

  searchAgileStoriesByName(event: any) {
    this.agileStories = this.agileStoriesService.getAgileStoriesByName(event.target.value, this.projectId);
  }

  assignStory(storyId: number) {
    this.agileSprint.storyIds.push(storyId);
  }

  removeStory(storyId: number) {
    const index =  this.agileSprint.storyIds.indexOf(storyId, 0);
    this.agileSprint.storyIds.splice(index, 1);
  }
}
