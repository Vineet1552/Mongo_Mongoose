// validators
import Joi from "joi";

const dataValidator = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    studentEmail: Joi.string().required(),
    dailCode: Joi.number().required().error(new Error("bhai dial code bhj de")),
    studentPhone: Joi.number().required(),
});

export default dataValidator;
