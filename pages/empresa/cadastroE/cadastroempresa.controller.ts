import { Controller, Post, Body } from '@nestjs/common';
import { CadastroEmpresaService } from './cadastroempresa.service';
import { CadastroEmpresa } from './cadastroempresa.entity';

@Controller('cadastro-empresa')//postman ve
export class CadastroEmpresaController {
  constructor(private readonly cadastroEmpresaService: CadastroEmpresaService) {}

  @Post()
  async create(@Body() createDto: CadastroEmpresa): Promise<CadastroEmpresa> {
    return this.cadastroEmpresaService.create(createDto);
  }
}
