import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vaga } from './vaga.entity';
import { Vagas } from './interfaces/vaga.interface';  // Importa a interface

@Injectable()
export class VagaService {
  private vaga: Vaga[];
  private nextId=1;

  criarVaga(vaga: any){
    const novaVaga= {
      VE_id: this.vaga.length +1,
      VE_descricao: vaga.VE_descricao || [],
      VE_exigencias: vaga.VE_exigencias || [],
      titulo: vaga.titulo,
      habilidadesInterpessoais: vaga.habilidadesInterpessoais ||[],
      habilidadesCognitivas: vaga.habilidadesCognitivas || [],
      habilidadesPessoais: vaga.habilidadesPessoais ||[],
    };

    console.log('Adicionando vaga:', novaVaga); // Testando o conteúdo antes de adicionar
    this.vaga.push(novaVaga);
    console.log('Lista de vagas:', this.vaga);// Verificando o estado do array após a adição
    return novaVaga;
  }

  listarVagas(){
    return this.vaga
  }

  // Deletar uma vaga com base no ID
  deletarVaga(id: number) {
    const index = this.vaga.findIndex(vaga => vaga.VE_id === id);
    if (index !== -1) {
      this.vaga.splice(index, 1);
      return { message: 'Vaga deletada com sucesso!' };
    } else {
      return { message: 'Vaga não encontrada!' };
    }
  }
  
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


