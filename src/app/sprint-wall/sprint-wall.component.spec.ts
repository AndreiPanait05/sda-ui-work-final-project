import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintWallComponent } from './sprint-wall.component';

describe('SprintWallComponent', () => {
  let component: SprintWallComponent;
  let fixture: ComponentFixture<SprintWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
