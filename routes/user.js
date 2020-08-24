var express = require('express');
var router = express.Router();

const authController=require("../app/auth/authantication")

router.post("/signup", authController.singnup)
router.post("/login", authController.login)


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
