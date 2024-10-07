import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroEmpresa } from './cadastroempresa.entity';
import { CadastroEmpresaService } from './cadastroempresa.service';
import { CadastroEmpresaController } from './cadastroempresa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CadastroEmpresa])],
  providers: [CadastroEmpresaService],
  controllers: [CadastroEmpresaController],
})
export class CadastroEmpresaModule {}
