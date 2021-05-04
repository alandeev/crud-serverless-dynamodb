const { ValidationError } = require("../errors");

const main = (schema, body) => {
  if (!body) {
    throw new ValidationError('Body is empty')
  }

  const { error, value } = schema.validate(body, {
    abortEarly: true
  })

  if (error) {
    throw new ValidationError(error.message, error.details);
  }

  return value;
}

module.exports = main;
