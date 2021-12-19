import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professors')
export class ProfessorsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
