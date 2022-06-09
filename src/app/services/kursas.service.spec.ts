import { TestBed } from '@angular/core/testing';

import { KursasService } from './kursas.service';

describe('KursasService', () => {
  let service: KursasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KursasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
