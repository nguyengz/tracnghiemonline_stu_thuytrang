import { TestBed } from '@angular/core/testing';

import { FacultieService } from './facultie.service';

describe('FacultieService', () => {
  let service: FacultieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
