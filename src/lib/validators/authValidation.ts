import Joi from "joi";

export function signupValidation(data: any) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const { error } = schema.validate(data, { abortEarly: false });
  return error ? error.details.map(d => d.message).join(", ") : null;
}

export function loginValidation(data: any) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const { error } = schema.validate(data, { abortEarly: false });
  return error ? error.details.map(d => d.message).join(", ") : null;
}
