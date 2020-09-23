var express = require('express');
const programContoller = require("../app/controller/programController")
var router = express.Router();
router.get('/', programContoller.getPrograms)
router.get('/blog',(req,res)=>{
    res.render('user/blog')
})
router.get('/about',(req,res)=>{
    res.render('user/about')
})
router.get('/contact',(req,res)=>{
    res.render('user/contact')
})

module.exports = router;




