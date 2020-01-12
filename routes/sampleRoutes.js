const express = require('express');
const {sampleController} = require('../controllers');

const router = express.Router();

router.get('/sampleRoute', sampleController.sampleControllerFunction);


module.exports = router;