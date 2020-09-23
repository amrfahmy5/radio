var express = require('express');
const programContoller = require("../app/controller/programController")
const postController = require("../app/controller/postController")
const preferenceController  = require("../app/controller/preferenceController")
const eposideController = require('../app/controller/episodeController')

var router = express.Router();

router.get('/', programContoller.getPrograms)
router.get('/blog',preferenceController.getPostsOfPreferedPrograms)
router.get('/about',(req,res)=>{
    res.render('user/about')
})
router.get('/contact',(req,res)=>{
    res.render('user/contact')
})

router.get('/program',programContoller.getProgram)

router.get('/eposides',eposideController.findByProgramId)

module.exports = router;




