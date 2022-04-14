export function validToken({ headers }, res, next) {
  const token = headers.authorization;
  if (token === '1234567') {
    return next()
  }
  return { statusCode: 401, message: 'Unauthorized' };
}