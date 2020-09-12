var express = require('express');
var router = express.Router();
router.get('/',(req,res)=>{
    res.render('user/index')
})
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




