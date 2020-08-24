var express = require('express');
var router = express.Router();

const postController = require("../app/controller/postController")


router.post('/save',postController.createPost);
router.post('/update',postController.updatePost);

router.get('/posts/:program_id',postController.findByProgramId);
router.get('/remove/:post_id',postController.removePost);

router.get("/", (req, res, next)=>{
    res.render("index" ,{ title: 'Posts' });
})
module.exports = router;
