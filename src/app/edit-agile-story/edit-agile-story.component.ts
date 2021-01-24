import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AgileStoryDtoResponse} from "../model/AgileStory";
import {AgileStoriesService} from "../agile-stories.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-agile-story',
  templateUrl: './edit-agile-story.component.html',
  styleUrls: ['./edit-agile-story.component.css']
})
export class EditAgileStoryComponent implements OnInit {

  agileStory: AgileStoryDtoResponse;
  agileStoryStatus = [
    'BACKLOG',
    'TO_DO',
    'IN_PROGRESS',
    'TESTED',
    'DONE'
  ];

  constructor(
    private dialogReference: MatDialogRef<EditAgileStoryComponent>,
    private router: Router,
    private agileStoriesService: AgileStoriesService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    this.agileStory = this.data;
  }

  // call API : updateAgileStoryStatus
  // se inchide modalul
  // se mai face un call pentru refresh
  //
  //
  editStatus() {
    this.agileStoriesService.updateAgileStoryStatus(this.agileStory.id, this.agileStory.status)
      .subscribe(data => {
        this.dialogReference.close();
      });
  }

  close() {
    this.dialogReference.close();
  }

}
