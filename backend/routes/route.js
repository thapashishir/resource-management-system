const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/health/check', controller.health_check);
router.post('/resource/add', controller.add_resource);

module.exports = router;