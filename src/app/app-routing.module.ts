import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {AgileSprintsComponent} from './agile-sprints/agile-sprints.component';
import {CreateAgileSprintComponent} from './create-agile-sprint/create-agile-sprint.component';
import {CreateAgileStoryComponent} from './create-agile-story/create-agile-story.component';
import {ProjectDetailedViewComponent} from './project-detailed-view/project-detailed-view.component';
import {AgileStoriesListComponent} from './agile-stories-list/agile-stories-list.component';
import {SprintWallComponent} from './sprint-wall/sprint-wall.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: RegisterUserComponent},
  {path: 'create-project', component: CreateProjectComponent},
  {path: 'project-list', component: ProjectListComponent},
  {path: 'agile-sprints/:id', component: AgileSprintsComponent},
  {path: 'create-agile-sprints/:id', component: CreateAgileSprintComponent},
  {path: 'create-story', component: CreateAgileStoryComponent},
  {path: 'project-info/:id', component: ProjectDetailedViewComponent},
  {path: 'agile-stories/:id', component: AgileStoriesListComponent},
  {path: 'agile-sprints/:id/wall-board', component: SprintWallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
