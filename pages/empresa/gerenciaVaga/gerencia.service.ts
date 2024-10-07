import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vaga } from '../../../../vaga.entity';

@Injectable()
export class VagaService {
  private vaga: Vaga[] = [];
  constructor(
    @InjectRepository(Vaga)
    private vagaRepository: Repository<Vaga>,
  ) {}

  async create(descricao: string, exigencias: string): Promise<Vaga> {
    const vaga = this.vagaRepository.create({
      VE_descricao: descricao,
      VE_exigencias: exigencias,
    });
    return this.vagaRepository.save(vaga);
  }
    async findAll(): Promise<Vaga[]> {
      return this.vaga; // Retorna a lista de vagas
    }
  }

