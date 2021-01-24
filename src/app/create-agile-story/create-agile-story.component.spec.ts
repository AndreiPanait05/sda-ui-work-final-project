import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgileStoryComponent } from './create-agile-story.component';

describe('CreateAgileStoryComponent', () => {
  let component: CreateAgileStoryComponent;
  let fixture: ComponentFixture<CreateAgileStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAgileStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgileStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
