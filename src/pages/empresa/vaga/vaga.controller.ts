import { Controller, Post, Body, Get } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { Vaga } from './vaga.entity';

@Controller('vaga')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  @Post()
  async create(@Body() body: { VE_descricao: string; VE_exigencias: string }): Promise<Vaga> {
    const { VE_descricao, VE_exigencias } = body;
    return this.vagaService.create(VE_descricao, VE_exigencias); // Certifique-se de que o método create espera esses parâmetros
  } // Aqui estava faltando uma chave de fechamento

  @Get()
  findAll() {
    return this.vagaService.findAll();
  }

  // Navegação para os requisitos de uma vaga específica
  @Get('/requisitos')
  navigateToRequisitos() {
    return {
      message: 'Navegando para requisitos',
      nextRoute: '/requisitos',
    };
  }
}
