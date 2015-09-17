module.exports = function(request, response, next) {
  console.log('%s %s', new Date().toISOString(), request.method, request.originalUrl);
  next();
};
