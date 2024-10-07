import { Controller, Post, Body, Get } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { Vaga } from './vaga.entity';

@Controller('vaga')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  @Post()
  criarVaga(@Body() body: any) {
    const { titulo, habilidadesInterpessoais,habilidadesCognitivas, habilidadesPessoais,VE_descricao, VE_exigencias} = body;

    return this.vagaService.criarVaga({
      titulo,
      VE_descricao, 
      VE_exigencias,
      habilidadesInterpessoais: habilidadesInterpessoais || [],
      habilidadesCognitivas: habilidadesCognitivas || [],
      habilidadesPessoais: habilidadesPessoais || [],
    }); // Certifique-se de que o método create espera esses parâmetros
  } // Aqui estava faltando uma chave de fechamento

  @Get()
  findAll() {
    return this.vagaService.findAll();
  }listarVagas(){
    return this.vagaService.listarVagas();
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
