import { TestBed } from '@angular/core/testing';

import { ServDescripcionService } from './serv-descripcion.service';

describe('ServDescripcionService', () => {
  let service: ServDescripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServDescripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
