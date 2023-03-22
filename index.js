'use strict';

const {
  server,
  errorHandler
} = require('./loaders');

(async () => {
  // create/initialize server
  const app = server.create();
  await server.start(app);

  // create error handler
  errorHandler.create();
})();