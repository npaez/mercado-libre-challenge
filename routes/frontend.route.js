// modules
const router = require('express').Router();

// controller
const {
  frontend
} = require('../controllers');

// all other GET requests not handled before will return our react app
router.get('*', frontend.client);

module.exports = router;