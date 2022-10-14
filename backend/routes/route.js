const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/health/check', controller.health_check);
module.exports = router;