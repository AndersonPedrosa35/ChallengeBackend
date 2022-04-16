const { Console } = require("console");

function validToken(req, res, next) {
  const token = req.headers.authorization;
  if (token === '1234567') {
    return next()
  }
  return { statusCode: 401, message: 'Unauthorized' };
}

module.exports = validToken;