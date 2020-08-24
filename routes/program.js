var express = require('express');
var router = express.Router();

const authController=require("../app/auth/authantication")
const programContoller =  require("../app/controller/programController")

/* GET users listing. */
router.get('/program/create',authController.protect,programContoller.createProgram);
router.get('/program/update',authController.protect,programContoller.updateProgram);
router.get('/program/delete',authController.protect,programContoller.deleteProgram);

module.exports = router;
