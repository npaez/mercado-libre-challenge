module.exports = {
  initialize(server) {
    server.use('/api', require('./testing.route'));
    server.use('/', require('./frontend.route'));

    return true;
  }
};