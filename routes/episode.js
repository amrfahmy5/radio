var express = require('express');
var router = express.Router();

const episodeController = require("../app/controller/episodeController")


router.post('/save',episodeController.createEpisode);
router.post('/update',episodeController.updateEpisode);

router.get('/episodesByProgId',episodeController.findByProgramId);

router.get('/remove',episodeController.removeEpisode);

router.get('/watch',episodeController.watch);
router.get('/rate',episodeController.makeRate);
router.get('/episodeRate',episodeController.episodeRate);

module.exports = router;
