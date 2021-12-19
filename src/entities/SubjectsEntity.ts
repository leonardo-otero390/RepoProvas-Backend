import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { SemestersEntity } from './SemestersEntity';

@Entity('subjects')
export class SubjectsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'semester_id' })
  semesterId: number;

  @OneToOne(() => SemestersEntity, {
    eager: true,
  })
  @JoinColumn({ name: 'semester_id' })
  semester: SemestersEntity;
}
