// modules
const router = require('express').Router();

// controller
const mercadolibreCtrl = require('../controllers/mercadolibre.controller');

// middlewares
const {
  rateLimiter
} = require('../lib/limiter.middleware');

// routing
router.get('/items', rateLimiter, mercadolibreCtrl.search);
router.get('/item/:id', rateLimiter, mercadolibreCtrl.item);

module.exports = router;