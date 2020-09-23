var express = require('express');
var router = express.Router();

const mainRadioContoller= require('../app/controller/miniRadioContoller')

router.get('/', mainRadioContoller.main);
router.get('/program', mainRadioContoller.specifProgram);
module.exports = router
