import { TestBed } from '@angular/core/testing';

import { ServCursosycapService } from './serv-cursosycap.service';

describe('ServCursosycapService', () => {
  let service: ServCursosycapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServCursosycapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
