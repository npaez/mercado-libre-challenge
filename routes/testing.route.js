// modules
const router = require('express').Router();

// controller
const {
  testing
} = require('../controllers');

// middlewares
const {
  rateLimiter
} = require('../lib/middlewares/limiter.middleware');

// routing
router.get('/test', rateLimiter, testing.home);

module.exports = router;