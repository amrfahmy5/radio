
var path = '/Audio/episodes/';
var formidable = require('formidable');
const fileManager = require("../middelware/fileManager")

const comment = require('../models/Comment')
const Episode = require("../models/Episode");




exports.createEpisode = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        episode = fields;
        user_id = 1 //req.session.user_id ;
        console.log(fields)
        Episode.save(episode, user_id, path, (err, results) => {
            if (!err) {
                var socket = require('../socket-io/notfication')
                socket.newEpisode(fields)
                fileManager.uploadFile(files.file, path + results.insertId, (uploaded) => {
                    console.log(uploaded)
                    res.status(200).json({
                        status: "created",
                        audio: (uploaded) ? "audio saved" : "audio not saved"
                    })
                })

            }
            else {
                res.status(500).json({
                    status: "faild to create new episode may program not found ",
                    Error: err
                })
            }
        });
    })
}
exports.updateEpisode = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        episode = fields;
        user_id = 1 //req.session.user_id ;
        Episode.update(episode, path, (err, result) => {
            if (!err) {
                fileManager.uploadFile(files.file, path + episode.program_id, (uploaded) => {
                    res.status(201).json({
                        status: "updated",
                        image: (uploaded) ? "audio updated" : "audio not updated"
                    })
                })
            }
            else {
                res.status(401).json({
                    status: "faild to update praogram ",
                    Error: err
                })
            }
        });
    })
}
exports.findByProgramId = (req, res) => {
    program_id = req.param("program_id");

    Episode.findByProgramId(program_id, (err, eposides) => {
        if (!err) {
            for (let i = 0; i < eposides.length; i++) {
                Episode.episodeWatch(eposides[i].id, (err, result) => {
                    eposides[i].watches = (result[0].watch&&!err) ? result[0].watch : 0

                })
                comment.findByEpisodeId(eposides[i].id, (err, result) => {
                    eposides[i].comments =(!err) ?result:[]
                    eposides[i].commentCount =(!err) ? result.length:0
                    if (i == eposides.length - 1) {
                        res.render("user/episodes" , {
                            eposides ,
                        })
                    }
                })
            }
        }

    })
}


exports.removeEpisode = (req, res) => {
    let episode_id = req.param("episode_id");
    Episode.delete(episode_id, (err, result) => {
        if (!err) {
            res.status(201).json({
                status: (result.affectedRows == 1) ? true : false
            })
        }
        else {
            res.status(401).json({
                status: "faild to delete episode ",
                Error: err
            })
        }
    });
}




//-----------------------------------------new-----------------------------------
exports.watch = (req, res) => {
    let user_id = 1 //req.session.user_id ;
    let episode_id = req.param('episode_id');
    Episode.watch(user_id, episode_id, (err, result) => {
        if (!err) {
            res.status(201).json({
                status: "watched"
            })
        }
        else {
            res.status(401).json({
                status: "faild to watch praogram  ",
                Error: err
            })
        }
    });
}
exports.makeRate = (req, res) => {
    let user_id = 1 //req.session.user_id ;
    let episode_id = req.param('episode_id');
    let rate = req.param('rate') % 6;
    Episode.insertRate(user_id, episode_id, rate, (err, result) => {
        if (!err) {
            res.status(201).json({
                status: "rated"
            })
        }
        else {
            res.status(401).json({
                status: "faild to rate praogram  ",
                Error: err
            })
        }
    });
}
exports.episodeRate = (req, res) => {
    let episode_id = req.param('episode_id');
    Episode.episodeRate(episode_id, (err, result) => {
        rate = result[0]
        if (!err) {
            res.status(201).json({
                rate: result[0].rate
            })
        }
        else {
            res.status(401).json({
                Error: err
            })
        }
    });
}

