import { TestBed } from '@angular/core/testing';

import { ItensPedidoService } from './itens-pedido.service';

describe('ItensPedidoService', () => {
  let service: ItensPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItensPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
