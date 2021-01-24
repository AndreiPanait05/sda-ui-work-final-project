import { TestBed } from '@angular/core/testing';

import { AgileSprintsService } from './agile-sprints.service';

describe('AgileSprintsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgileSprintsService = TestBed.get(AgileSprintsService);
    expect(service).toBeTruthy();
  });
});
