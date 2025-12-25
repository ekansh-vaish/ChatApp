class ExpressError extends Error {
  constructor(message, statusCode) {
    super(); // Call the parent Error constructor
    this.statusCode = statusCode;
    this.message = message ;
    // Capture stack trace for cleaner debugging, excluding the constructor call
  }
}

module.exports = ExpressError;