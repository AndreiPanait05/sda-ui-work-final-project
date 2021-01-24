import { TestBed } from '@angular/core/testing';

import { AgileStoriesService } from './agile-stories.service';

describe('AgileStoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgileStoriesService = TestBed.get(AgileStoriesService);
    expect(service).toBeTruthy();
  });
});
