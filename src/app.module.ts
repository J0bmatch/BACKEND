import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroEmpresaModule } from './pages/empresa/cadastro/cadastroempresa.module'; 
import { CadastroEmpresa } from './pages/empresa/cadastro/cadastroempresa.entity';
import { VagaModule } from './pages/empresa/vaga/vaga.module';
import { LoginCModule } from './pages/candidato/login/loginC.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306, 
      username: 'root',
      password: '',
      database: 'jobmatch',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }),
    CadastroEmpresaModule,
    VagaModule,
    LoginCModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}