const express = require('express');
const TestController = require('../controller/Test')

const router = express.Router();
router.post('/Test', TestController.createTest);
module.exports = router;