var express = require('express');
var router = express.Router();
const authController = require("../app/auth/authantication")
const programContoller = require("../app/controller/programController")
const validation = require('../app/middelware/programValidator')

//router.post('/update',authController.protect,programContoller.updateProgram);
/* GET users listing. ---> authController.protect*/
router.post('/create',validation.createValidate, programContoller.createProgram);
router.post('/update',validation.updateValidate, programContoller.updateProgram);
router.get('/delete', validation.deleteVlidate,programContoller.deleteProgram);
router.get('/Allprogram', programContoller.getPrograms);
router.get('/program', validation.getVlidate,programContoller.getProgram);

router.get('/search',validation.searchValidate,programContoller.search)

router.get('/', (req, res)=>{
    res.render('program')
  });


module.exports = router;
