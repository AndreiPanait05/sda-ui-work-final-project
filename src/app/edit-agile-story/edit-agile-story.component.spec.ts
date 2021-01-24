import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgileStoryComponent } from './edit-agile-story.component';

describe('EditAgileStoryComponent', () => {
  let component: EditAgileStoryComponent;
  let fixture: ComponentFixture<EditAgileStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgileStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgileStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
