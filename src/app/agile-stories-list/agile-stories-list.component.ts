import { Component, OnInit } from '@angular/core';
import {AgileStoriesService} from "../agile-stories.service";
import {Observable} from "rxjs";
import {AgileStoryDtoResponse} from "../model/AgileStory";
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {EditAgileStoryComponent} from "../edit-agile-story/edit-agile-story.component";
import {AgileStoriesModalData} from "../model/AgileStoriesModalData";

@Component({
  selector: 'app-agile-stories-list',
  templateUrl: './agile-stories-list.component.html',
  styleUrls: ['./agile-stories-list.component.css']
})
export class AgileStoriesListComponent implements OnInit {

  agileStories: Observable<AgileStoryDtoResponse[]>;
  projectId: number;
  agileStory: AgileStoryDtoResponse;

  constructor(
    private route: ActivatedRoute,
    private agileStoriesService: AgileStoriesService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    this.agileStories = this.agileStoriesService.getAgileStoriesByProjectId(this.projectId);
  }

  edit(storyId: number) {
    this.agileStoriesService.getAgileStoryById(storyId).subscribe(data => {
      this.agileStory = data;
      const matDialogConfig = new MatDialogConfig();
      matDialogConfig.data = this.agileStory;
      const dialogRef = this.matDialog.open(EditAgileStoryComponent, matDialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        this.agileStories = this.agileStoriesService.getAgileStoriesByProjectId(this.projectId);
      });
      // const dialogRef = this.matDialog.open(EditAgileStoryComponent, matDialogConfig);
      // dialogRef.afterClosed().subscribe(() => {
      //   this.agileStories = this.agileStoriesService.getAgileStoriesByProjectId(this.projectId);
      // });
    });
  }
}
