import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('semesters')
export class SemestersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
