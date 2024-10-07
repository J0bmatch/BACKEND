import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginCController } from './loginC.controller';
import { LoginCService } from './loginC.service';
import { Candidato } from './candidato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidato])],
  controllers: [LoginCController],
  providers: [LoginCService],
})
export class LoginCModule {}