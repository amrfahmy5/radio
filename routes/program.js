var express = require('express');
var router = express.Router();
const authController = require("../app/auth/authantication")
const programContoller = require("../app/controller/programController")


//router.post('/update',authController.protect,programContoller.updateProgram);
/* GET users listing. ---> authController.protect*/
router.post('/create', programContoller.createProgram);
router.post('/update', programContoller.updateProgram);
router.get('/delete', programContoller.deleteProgram);
router.get('/Allprogram', programContoller.getPrograms);
router.get('/program', programContoller.getProgram);
router.get('/search',programContoller.search)

router.get('/', (req, res)=>{
    res.render('program')
  });


module.exports = router;
