import {MigrationInterface, QueryRunner} from "typeorm";

export class addPDFLinkToExams1640008356877 implements MigrationInterface {
    name = 'addPDFLinkToExams1640008356877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "exams_fk0"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "exams_fk1"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "subjects_fk0"`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" DROP CONSTRAINT "professor_subjects_fk0"`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" DROP CONSTRAINT "professor_subjects_fk1"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "pdf_link" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "professor_subject_id"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "professor_subject_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professors" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "professors" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "semesters" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "semesters" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "UQ_853c557423118a72db19d9cc088" UNIQUE ("semester_id")`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" ADD CONSTRAINT "UQ_0568c3fe18e51d58c0e04e2ee02" UNIQUE ("subject_id")`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" ADD CONSTRAINT "UQ_4975b1d26b6164143a7526b21cf" UNIQUE ("professor_id")`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" ALTER COLUMN "professor_id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "professor_subjects_professor_id_seq"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_853c557423118a72db19d9cc088" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" ADD CONSTRAINT "FK_4975b1d26b6164143a7526b21cf" FOREIGN KEY ("professor_id") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" ADD CONSTRAINT "FK_0568c3fe18e51d58c0e04e2ee02" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor_subjects" DROP CONSTRAINT "FK_0568c3fe18e51d58c0e04e2ee02"`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" DROP CONSTRAINT "FK_4975b1d26b6164143a7526b21cf"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_853c557423118a72db19d9cc088"`);
        await queryRunner.query(`CREATE SEQUENCE "professor_subjects_professor_id_seq" OWNED BY "professor_subjects"."professor_id"`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" ALTER COLUMN "professor_id" SET DEFAULT nextval('professor_subjects_professor_id_seq')`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" DROP CONSTRAINT "UQ_4975b1d26b6164143a7526b21cf"`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" DROP CONSTRAINT "UQ_0568c3fe18e51d58c0e04e2ee02"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "UQ_853c557423118a72db19d9cc088"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "semesters" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "semesters" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professors" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "professors" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "professor_subject_id"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "professor_subject_id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "pdf_link"`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" ADD CONSTRAINT "professor_subjects_fk1" FOREIGN KEY ("professor_id") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professor_subjects" ADD CONSTRAINT "professor_subjects_fk0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("professor_subject_id") REFERENCES "professor_subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
