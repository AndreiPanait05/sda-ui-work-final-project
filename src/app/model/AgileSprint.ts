import {MinimumUserInfoDto} from "./Project";

export class AgileSprintDtoResponse {
  id: number;
  startDate: string;
  endDate: string;
  projectDto: AgileSprintProjectDtoResponse;
  agileStoriesDto: AgileSprintStoryDtoResponse[];
}

export class AgileSprintProjectDtoResponse {
 id: number;
 name: string;
}

export class AgileSprintStoryDtoResponse {
    id: number;
    agileStoryStatus: string;
    assignedUser: string;
    name: string;
}

export class AgileSprintDtoRequest {
  startDate: string;
  endDate: string;
  projectId: number;
  storyIds: number[] = [];
}
