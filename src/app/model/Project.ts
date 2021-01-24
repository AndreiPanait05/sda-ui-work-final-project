export class ProjectRequestDto {
  name: string;
  description: string;
}

export class ProjectResponseDto {
  id: number;
  name: string;
  description: string;
  administrator: MinimumUserInfoDto;
  assignedUsers: MinimumUserInfoDto[];
  sprintNumbers: number;
}


export class MinimumUserInfoDto {
  id: number;
  name: string;
  emailAddress: string;
  roles: string[];
}
