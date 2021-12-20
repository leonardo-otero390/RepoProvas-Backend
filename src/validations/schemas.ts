import joi from 'joi';

const pdfRegex = /\.pdf$/;

const examBodySchema = joi.object({
  name: joi.string().min(3).required(),
  professorSubjectId: joi.number().required(),
  categoryId: joi.number().required(),
  pdfLink: joi.string().uri().pattern(new RegExp(pdfRegex)).required(),
});

export { examBodySchema };
