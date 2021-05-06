class ValidationError extends Error {
  statusCode = 400
  isTreated = true
  constructor(message, details = []) {
    super(message)
    this.message = message;
    this.details = details;
  }
}

module.exports = ValidationError;
