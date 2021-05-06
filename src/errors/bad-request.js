class BadRequestError extends Error {
  statusCode = 400
  isTreated = true
  constructor(message) {
    super(message)
    this.message = message;
  }
}

module.exports = BadRequestError;
