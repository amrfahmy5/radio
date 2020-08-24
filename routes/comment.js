var express = require('express');
var router = express.Router();

const commentController = require("../app/controller/commentController")


router.post('/save',commentController.createComment);
router.post('/update',commentController.updateComment);

router.get('/commentsPosts/:post_id',commentController.findByPostId);
router.get('/commentsEpisode/:episode_id',commentController.findByEpisodeId);

router.get('/remove/:comment_id',commentController.removeComment);

router.get("/", (req, res, next)=>{
    res.render("index" ,{ title: 'Comment' });
})
module.exports = router;
