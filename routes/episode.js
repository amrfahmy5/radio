var express = require('express');
var router = express.Router();

const episodeController = require("../app/controller/episodeController")


router.post('/save',episodeController.createEpisode);
router.post('/update',episodeController.updateEpisode);

router.get('/episodes/:program_id',episodeController.findByProgramId);

router.get('/remove',episodeController.removeEpisode);

router.get('/watch',episodeController.watch);
router.get('/rate',episodeController.makeRate);
router.get('/episodeRate',episodeController.episodeRate);

router.get("/", (req, res, next)=>{
  res.render("episodes");
})
module.exports = router;
