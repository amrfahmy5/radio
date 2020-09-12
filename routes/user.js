var express = require('express');
var router = express.Router();
// var passport = require('passport');

const authController=require("../app/auth/authantication")

// router.post("/signup", authController.singnup)
// router.post("/login", authController.login)




var passport = require('../config/passport');




router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/',
    failureFlash: true
}));


router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: 'user/profile',
    failureRedirect: '/user/',
    failureFlash: true
}));


router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/user/profile',
        failureRedirect: '/user/'
    }));




router.get('/', (req, res) => {
    res.render('user')
})


router.get('/profile', (req, res) => {
    console.log(req.session.passport.user)
    console.log(req.user)
    res.render('user')
})
module.exports = router;



