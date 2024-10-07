// src/candidato/login/loginC.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidato } from './candidato.entity';
import { NotFoundException } from '@nestjs/common';
import * as nodemailer from 'nodemailer'; 


@Injectable()
export class LoginCService {
  constructor(
    @InjectRepository(Candidato)
    private readonly candidatoRepository: Repository<Candidato>,
  ) {}

  async validateLogin(CC_email: string, CC_cpf: string): Promise<{ candidato: Candidato; isFirstAccess: boolean }> {
    const candidato = await this.candidatoRepository.findOne({
      where: { CC_email, CC_cpf },
    }); 
  
    if (!candidato) {
      throw new NotFoundException('Credenciais inválidas');
    }
  
    const isFirstAccess = !candidato.experience; // Check if experience is empty or null
    return { candidato, isFirstAccess };
  }

  // Novo método para enviar o código de verificação
  async sendVerificationCode(email: string): Promise<{ code: string }> {
    const candidato = await this.candidatoRepository.findOne({
      where: { CC_email: email },
    });

    if (!candidato) {
      throw new NotFoundException('E-mail não encontrado');
    }

    // Gerar um código de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // Enviar o código por e-mail usando nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kiadpmarins@gmail.com', // Coloque seu e-mail
        pass: 'Ravina.1230', // Coloque sua senha
      },
    });

    await transporter.sendMail({
      from: 'kiadpmarins@gmail.com',
      to: email,
      subject: 'Seu código de verificação',
      text: `Seu código de verificação é: ${code}`,
    });

    // Retornar o código para o front-end
    return { code };
  }
}
