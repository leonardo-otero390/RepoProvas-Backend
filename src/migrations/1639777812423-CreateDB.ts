import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDB1639777812423 implements MigrationInterface {
    name = 'CreateDB1639777812423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "subjects_fk0"`);
        await queryRunner.query(`ALTER TABLE "semesters" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "semesters" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "semester_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "UQ_853c557423118a72db19d9cc088" UNIQUE ("semester_id")`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_853c557423118a72db19d9cc088" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_853c557423118a72db19d9cc088"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "UQ_853c557423118a72db19d9cc088"`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "semester_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "semesters" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "semesters" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
