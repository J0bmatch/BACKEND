import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaga } from '../../../../vaga.entity';
import { VagaService } from './gerencia.service';
import { VagaController } from '../../../../vaga.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vaga])],
  providers: [VagaService],
  controllers: [VagaController],
})
export class VagaModule {}
