import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileStoriesListComponent } from './agile-stories-list.component';

describe('AgileStoriesListComponent', () => {
  let component: AgileStoriesListComponent;
  let fixture: ComponentFixture<AgileStoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileStoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileStoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
