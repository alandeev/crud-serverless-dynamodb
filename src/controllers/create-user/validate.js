const Joi = require("joi")
const { validate } = require('../../helpers');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

const main = (body) => {
  const dep = main.dependencies();

  return dep.validate(schema, body);
}

main.dependencies = () => ({
  validate
})

module.exports = main;
