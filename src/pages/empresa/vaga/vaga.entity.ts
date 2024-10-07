import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vagaempresateste')
export class Vaga {
  @PrimaryGeneratedColumn()
  VE_id: number;

  @Column('longtext')
  VE_descricao: string;

  @Column('longtext')
  VE_exigencias: string;
}
