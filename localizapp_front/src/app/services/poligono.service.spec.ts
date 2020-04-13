import { TestBed } from '@angular/core/testing';

import { PoligonoService } from './poligono.service';

describe('PoligonoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoligonoService = TestBed.get(PoligonoService);
    expect(service).toBeTruthy();
  });
});
