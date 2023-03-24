// modules
const path = require('path');

// frontend client ctrl
exports.client = (req, res) => {
  const frontend = path.join(__dirname, '../client/build/index.html');

  return res.sendFile(frontend);
};