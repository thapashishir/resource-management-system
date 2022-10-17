const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/health/check', controller.health_check);
router.post('/resource/add', controller.add_resource);
router.get('/resource/list', controller.list_resource);
router.get('/resource/get/:id', controller.get_resource_details);
router.post('/resource/update', controller.update_resource);
router.get('/resource/delete/:id', controller.delete_resource);

module.exports = router;