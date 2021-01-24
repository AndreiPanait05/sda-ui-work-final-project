import {MinimumUserInfoDto} from './Project';

export class AgileStoryDtoResponse {
  id: number;
  storyPoints: number;
  name: string;
  status: string;
  description: string;
  userInfo: MinimumUserInfoDto;
}

export class AgileStoryDtoRequest {
  name: string;
  description: string;
  status: string;
  storyPoints: number;
  username: string;
  weight: number;
  projectId: number;
}
