import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Prova from './Prova';

@Entity({ name: 'Campeonatos' })
export default class Campeonato {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  idCampeonato: string;

  @Column({ length: 35 })
  nomeCampeonato: string

  @Column({ length: 150 })
  descritivo: string

  @Column({ nullable: true })
  ativo: boolean

  @Column({ type: 'blob', nullable: true })
  pdfFile: Buffer;

  @OneToMany(() => Prova, (prova) => prova.campeonato)
  provas: Prova[]
}