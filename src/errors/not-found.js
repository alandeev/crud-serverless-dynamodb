class NotFoundError extends Error {
    statusCode = 404
    isTraeted = true
    constructor(message) {
        super(message)
        this.message = message;
    }
}

module.exports = NotFoundError;