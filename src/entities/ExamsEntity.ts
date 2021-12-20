import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exams')
export class ExamsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'pdf_link' })
  pdfLink: string;

  @Column({ name: 'professor_subject_id' })
  professorSubjectId: number;

  @Column({ name: 'category_id' })
  categoryId: number;
}
