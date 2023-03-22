module.exports = {
  initialize(server) {
    server.use('/api', require('./testing.route'));
    server.use('/api', require('./mercadolibre.route'));

    server.use('/', require('./frontend.route'));

    return true;
  }
};