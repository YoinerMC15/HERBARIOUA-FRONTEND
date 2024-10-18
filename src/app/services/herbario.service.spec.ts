import { TestBed } from '@angular/core/testing';

import { HerbarioService } from './herbario.service';

describe('HerbarioService', () => {
  let service: HerbarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerbarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
