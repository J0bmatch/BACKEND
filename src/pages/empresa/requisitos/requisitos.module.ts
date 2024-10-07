import { Module } from '@nestjs/common';
import { RequisitoController } from './requisitos.controller';
import { RequisitoService } from './requisitos.service';

@Module({
  controllers: [RequisitoController],
  providers: [RequisitoService],
})
export class RequisitoModule {}
