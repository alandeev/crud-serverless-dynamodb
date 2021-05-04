const Joi = require("joi")
const { validate } = require('../../helpers');

const schema = Joi.object({
  user_id: Joi.string().uuid().required(),
  name: Joi.string().required()
})

const main = (body) => {
  const dep = main.dependencies();

  return dep.validate(schema, body);
}

main.dependencies = () => ({
  validate
})

module.exports = main;
