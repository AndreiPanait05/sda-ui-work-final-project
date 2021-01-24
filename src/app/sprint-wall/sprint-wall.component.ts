import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {AgileStoriesService} from "../agile-stories.service";
import {AgileStoryDtoResponse} from "../model/AgileStory";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sprint-wall',
  templateUrl: './sprint-wall.component.html',
  styleUrls: ['./sprint-wall.component.css']
})
export class SprintWallComponent implements OnInit {

  todoDto: AgileStoryDtoResponse[] = [];
  inProgressDto: AgileStoryDtoResponse[] = [];
  doneDto: AgileStoryDtoResponse[] = [];

  constructor(private agileStoriesService: AgileStoriesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const sprintId: number = this.route.snapshot.params["id"];
    this.agileStoriesService.getAgileStoriesBySprintId(sprintId).subscribe((data: AgileStoryDtoResponse[]) => {
      data.forEach(el => {
        if (el.status === 'DONE') {
          this.doneDto.push(el);
        } else if (el.status === 'TO_DO') {
          this.todoDto.push(el);
        } else {
          this.inProgressDto.push(el);
        }
      });
    });
  }

  drop(event: CdkDragDrop<AgileStoryDtoResponse[]>) {
    console.log('DRAG AND DROP EVENT === ', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const currentAgileStory: AgileStoryDtoResponse = event.previousContainer.data[event.previousIndex];
      const updatedAgileStoryStatus: AgileStoryDtoResponse =
        this.changeStatus(event.previousContainer.data[event.previousIndex], event.container.id);
      this.agileStoriesService.updateAgileStoryStatus(currentAgileStory.id, updatedAgileStoryStatus.status).subscribe( data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(event.container.data[event.currentIndex]);
  }

  changeStatus(agileStory: AgileStoryDtoResponse, newStatus: string): AgileStoryDtoResponse {
    // @ts-ignore
    switch (newStatus) {
      case('in_progress_container') : {
        agileStory.status = 'IN_PROGRESS';
        break;
      }
      case('todo_container') : {
        agileStory.status = 'TO_DO';
        break;
      }
      case('done_container') : {
        agileStory.status = 'DONE';
        break;
      }
      default: {
        console.log('error');
      }
   }
    return agileStory;
  }
}
