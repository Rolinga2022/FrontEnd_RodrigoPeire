import { TestBed } from '@angular/core/testing';

import { ServInterfazService } from './serv-interfaz.service';

describe('ServInterfazService', () => {
  let service: ServInterfazService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServInterfazService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
