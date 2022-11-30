import { TestBed } from '@angular/core/testing';

import { ServFormacionService } from './serv-formacion.service';

describe('ServFormacionService', () => {
  let service: ServFormacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServFormacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
