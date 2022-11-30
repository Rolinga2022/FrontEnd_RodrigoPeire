import { TestBed } from '@angular/core/testing';

import { ServExperienService } from './serv-experien.service';

describe('ServExperienService', () => {
  let service: ServExperienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServExperienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
