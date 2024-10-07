// src/loginC/loginC.controller.ts
import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { LoginCService } from './loginC.service';

@Controller('loginC')
export class LoginCController {
  constructor(private readonly loginCService: LoginCService) {}

  @Get()
  async login(@Query('CC_email') CC_email: string, @Query('CC_cpf') CC_cpf: string) {
    return this.loginCService.validateLogin(CC_email, CC_cpf);
  }

  @Post('send-verification')
  async sendVerificationCode(@Body('CC_email') email: string) {
    return this.loginCService.sendVerificationCode(email);  
  }
}
