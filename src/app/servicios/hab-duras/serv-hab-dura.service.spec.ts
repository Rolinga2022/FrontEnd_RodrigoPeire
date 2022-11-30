import { TestBed } from '@angular/core/testing';

import { ServHabDuraService } from './serv-hab-dura.service';

describe('ServHabDuraService', () => {
  let service: ServHabDuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServHabDuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
