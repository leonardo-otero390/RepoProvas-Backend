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

  @OneToOne(() => SemestersEntity, {
    eager: true,
  })
  @JoinColumn({ name: 'semester_id' })
  semester: SemestersEntity;
}
