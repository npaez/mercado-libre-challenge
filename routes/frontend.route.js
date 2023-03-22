// modules
const router = require('express').Router();

// controller
const frontendCtrl = require('../controllers/frontend.controller');

// all other GET requests not handled before will return our react app
router.get('*', frontendCtrl.client);

module.exports = router;