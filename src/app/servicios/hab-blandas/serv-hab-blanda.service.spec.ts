import { TestBed } from '@angular/core/testing';

import { ServHabBlandaService } from './serv-hab-blanda.service';

describe('ServHabBlandaService', () => {
  let service: ServHabBlandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServHabBlandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
