import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import {HttpInterceptorService} from './httpInterceptor.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { AgileSprintsComponent } from './agile-sprints/agile-sprints.component';
import { MenuComponent } from './menu/menu.component';
import { CreateAgileSprintComponent } from './create-agile-sprint/create-agile-sprint.component';
import { AgileStoriesComponent } from './agile-stories/agile-stories.component';
import { CreateAgileStoryComponent } from './create-agile-story/create-agile-story.component';
import { ProjectDetailedViewComponent } from './project-detailed-view/project-detailed-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import { StoryListComponent } from './story-list/story-list.component';
import { AgileStoriesListComponent } from './agile-stories-list/agile-stories-list.component';
import { EditAgileStoryComponent } from './edit-agile-story/edit-agile-story.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { SprintWallComponent } from './sprint-wall/sprint-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUserComponent,
    CreateProjectComponent,
    ProjectListComponent,
    AgileSprintsComponent,
    MenuComponent,
    CreateAgileSprintComponent,
    AgileStoriesComponent,
    CreateAgileStoryComponent,
    ProjectDetailedViewComponent,
    StoryListComponent,
    AgileStoriesListComponent,
    EditAgileStoryComponent,
    SprintWallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  entryComponents: [EditAgileStoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
