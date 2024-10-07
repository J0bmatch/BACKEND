import { Injectable } from '@nestjs/common';

@Injectable()
export class RequisitoService {
  findAll() {
    return [{ id: 1, descricao: 'Requisito 1' }, { id: 2, descricao: 'Requisito 2' }];
  }
}