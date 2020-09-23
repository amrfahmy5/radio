var express = require('express');
const programContoller = require("../app/controller/programController")
const postController = require("../app/controller/postController")
const preferenceController  = require("../app/controller/preferenceController")
var router = express.Router();

router.get('/', programContoller.getPrograms)
router.get('/blog',preferenceController.getPostsOfPreferedPrograms)
router.get('/about',(req,res)=>{
    res.render('user/about')
})
router.get('/contact',(req,res)=>{
    res.render('user/contact')
})

module.exports = router;




