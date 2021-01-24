import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileStoriesComponent } from './agile-stories.component';

describe('AgileStoriesComponent', () => {
  let component: AgileStoriesComponent;
  let fixture: ComponentFixture<AgileStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
