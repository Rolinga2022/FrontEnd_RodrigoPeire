import { TestBed } from '@angular/core/testing';

import { ServPersonaService } from './serv-persona.service';

describe('ServPersonaService', () => {
  let service: ServPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
