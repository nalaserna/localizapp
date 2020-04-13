import { TestBed } from '@angular/core/testing';

import { FuncionService } from './funcion.service';

describe('FuncionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionService = TestBed.get(FuncionService);
    expect(service).toBeTruthy();
  });
});
