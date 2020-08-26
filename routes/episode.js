var express = require('express');
var router = express.Router();

const episodeController = require("../app/controller/episodeController")


router.post('/save',episodeController.createEpisode);
router.post('/update',episodeController.updateEpisode);

router.get('/episodes/:program_id',episodeController.findByProgramId);
router.get('/remove/:episode_id',episodeController.removeEpisode);

router.get("/", (req, res, next)=>{
    res.render("episode");
})
module.exports = router;
