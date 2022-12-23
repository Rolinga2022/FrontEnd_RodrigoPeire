import { TestBed } from '@angular/core/testing';

import { ServSobreMiService } from './serv-sobre-mi.service';

describe('ServSobreMiService', () => {
  let service: ServSobreMiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServSobreMiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
