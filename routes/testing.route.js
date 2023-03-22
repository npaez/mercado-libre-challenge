// modules
const router = require('express').Router();

// controller
const testingCtrl = require('../controllers/testing.controller');

// middlewares
const {
  rateLimiter
} = require('../lib/limiter.middleware');

// routing
router.get('/test', rateLimiter, testingCtrl.home);

module.exports = router;