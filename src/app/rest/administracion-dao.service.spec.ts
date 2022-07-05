import { TestBed } from '@angular/core/testing';

import { AdministracionDAOService } from './administracion-dao.service';

describe('RendicionDAOService', () => {
  let service: AdministracionDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministracionDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
