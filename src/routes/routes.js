const express = require('express');
const router = express.Router();

const FibonacciController = require('../controllers/fibonacci');

// * route for fibonacci sequence
router.get('/fibonacci', FibonacciController.getFibonacci);

module.exports = router;