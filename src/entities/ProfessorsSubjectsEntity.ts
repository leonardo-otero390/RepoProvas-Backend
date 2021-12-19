import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { ProfessorsEntity } from './ProfessorsEntity';
import { SubjectsEntity } from './SubjectsEntity';

@Entity('professor_subjects')
export class ProfessorsSubjectsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'subject_id' })
  subjectId: number;

  @OneToOne(() => ProfessorsEntity, {
    eager: true,
  })
  @JoinColumn({ name: 'professor_id' })
  professor: ProfessorsEntity;

  @OneToOne(() => SubjectsEntity, {
    eager: true,
  })
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectsEntity;
}
