import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgileSprintComponent } from './create-agile-sprint.component';

describe('CreateAgileSprintComponent', () => {
  let component: CreateAgileSprintComponent;
  let fixture: ComponentFixture<CreateAgileSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAgileSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgileSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
