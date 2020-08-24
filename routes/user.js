var express = require('express');
var router = express.Router();

const authController=require("../app/auth/authantication")

router.post("/signup", authController.singnup)
router.post("/login", authController.login)


module.exports = router;