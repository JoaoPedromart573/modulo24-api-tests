const Joi = require('joi');

module.exports = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required()
});