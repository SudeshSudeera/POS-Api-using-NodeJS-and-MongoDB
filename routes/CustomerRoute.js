const express = require('express');
const customerController = require('../controller/CustomerController');
const verifyUser = require('../middleware/AuthMiddleware');

const router = express.Router();

router.post('/create',verifyUser, customerController.create);
router.get('/find-by-id/:id',verifyUser, customerController.findById);
router.delete('/delete-by-id/:id',verifyUser, customerController.deleteById);
router.put('/update/:id',verifyUser, customerController.update);
router.get('/find-all',verifyUser, customerController.findAll);
router.get('/find-count',verifyUser, customerController.findCount);

module.exports = router;