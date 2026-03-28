import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(4000),
  DATABASE_URL: Joi.string().uri().required(),
  JWT_SECRET: Joi.string().min(16).required(),
  JWT_EXPIRES_IN: Joi.string().default('15m'),
  JWT_REFRESH_SECRET: Joi.string().min(16).required(),
  JWT_REFRESH_EXPIRES_IN: Joi.string().default('7d'),
  FRONTEND_URL: Joi.string().uri().default('http://localhost:3000'),
  FRONTEND_URLS: Joi.string().allow('', null),
  MAIL_HOST: Joi.string().allow('', null),
  MAIL_PORT: Joi.number().optional(),
  MAIL_USER: Joi.string().allow('', null),
  MAIL_PASSWORD: Joi.string().allow('', null),
  MAIL_FROM: Joi.string().email().allow('', null),
});
