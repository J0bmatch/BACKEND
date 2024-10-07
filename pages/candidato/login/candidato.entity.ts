// src/loginC/candidato.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('candidatos_test')
export class Candidato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CC_email: string;

  @Column()
  CC_cpf: string;

  @Column()
  experience: string; 
} /*@Entity('cadastroCandidato')
export class Candidato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  telefone: string;

  @Column()
  cursos: string;

  @Column()
  idiomas: string;

  @Column()
  fluencia: string;

  @Column()
  experiencia: string;

  @Column()
  interesse: string;

  @Column()
  habilidades: string;

  @Column()
  descricao: string;
} */