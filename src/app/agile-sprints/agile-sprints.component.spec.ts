import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileSprintsComponent } from './agile-sprints.component';

describe('AgileSprintsComponent', () => {
  let component: AgileSprintsComponent;
  let fixture: ComponentFixture<AgileSprintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileSprintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
