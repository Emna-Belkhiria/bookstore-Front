import { TestBed } from '@angular/core/testing';

import { LineorderService } from './lineorder.service';

describe('LineorderService', () => {
  let service: LineorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
