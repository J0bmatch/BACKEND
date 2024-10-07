import { Controller, Get } from '@nestjs/common';
import { RequisitoService } from './requisitos.service';

@Controller('requisitos')
export class RequisitoController {
  constructor(private readonly requisitoService: RequisitoService) {}

  @Get()
  findAll() {
    return this.requisitoService.findAll();
  }

  // Navegação para as vagas
  @Get('/vagas')
  navigateToVagas() {
    return {
      message: 'Navegando para vagas',
      nextRoute: '/vagas',
    };
  }
}