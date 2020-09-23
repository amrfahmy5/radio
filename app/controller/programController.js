const Program = require('../models/Program')
const con = require('../../config/connection')
var formidable = require('formidable');
const fileManager = require("../middelware/fileManager")


const Comment = require('../models/Comment')
const Preference = require('../models/Preference')
const Episode = require('../models/Episode')


var imgPath = '/images/programImage/';
var promoPath = '/Audio/programPromo/'

function NewProgramNotfication(fields) {
    var socket = require('../socket-io/notfication')
    socket.newProgram(fields)
}

function saveFiles_sendRes(res, files, id, method) {
    fileManager.uploadFile(files.file, imgPath + id, (imageUploaded) => {
        fileManager.uploadFile(files.file2, promoPath + id, (promoUploaded) => {
            res.status(200).json({
                status: method,
                image: (imageUploaded && promoUploaded) ? "image and promo " + method :
                    (imageUploaded && !promoUploaded) ? "image " + method + " but promo not" :
                        (!imageUploaded && promoUploaded) ? "promo " + method + " but image not" : "image and promo not " + method
            })
        })
    })
}
exports.index = (req, res) => {

    Program.getAllPrograms((err, result) => {
        res.render("user/index", {
            Programs: result
        })
    })
}
exports.createProgram = (req, res) => {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        let USER_ID = 1 //req.session.userID
        let imgExtName = (files.file) ? fileManager.getExtetion(files.file.name) : ''
        let audioExtName = fileManager.getExtetion(files.file2.name)
        let validFile = {
            "img": (files.file && (imgExtName == 'jpg' || imgExtName == 'png' || imgExtName == 'PNG')) ? true : false,
            "audio": (files.file2 && (audioExtName == 'mp3')) ? true : false
        }
        Program.save(fields, USER_ID, imgPath, promoPath, imgExtName, validFile, (err, result) => {
            NewProgramNotfication(fields);
            if (!err) {
                saveFiles_sendRes(res, files, result.insertId, 'saved')
            }
            else {
                res.status(404).json({
                    status: "faild to create praogram ",
                    Error: err
                })
            }
        });
    })
}

exports.updateProgram = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        let imgExtName = (files.file) ? fileManager.getExtetion(files.file.name) : ''
        let audioExtName = fileManager.getExtetion(files.file2.name)
        let validFile = {
            "img": (files.file && (imgExtName == 'jpg' || imgExtName == 'png' || imgExtName == 'PNG')) ? true : false,
            "audio": (files.file2 && (audioExtName == 'mp3')) ? true : false
        }
        Program.update(fields, imgPath, promoPath, imgExtName, validFile, (err, result) => {
            if (!err) {
                saveFiles_sendRes(res, files, fields.program_id, 'update')
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

exports.deleteProgram = (req, res) => {
    let program_id = req.param("program_id");
    Program.delete(program_id, (err, result) => {
        if (!err) {
            res.status(201).json({
                status: (result.affectedRows == 1) ? "deleted" : "notFounded"
            })
        }
        else {
            res.status(401).json({
                status: "faild to delete praogram ",
                Error: err
            })
        }
    });
}

exports.getPrograms = (req, res) => {

    Program.getAllPrograms((err, result) => {
        if (!err) {
            res.render("user/index", {
                Programs: result
            })
        }
        else {
            res.status(401).json({
                status: "faild to get all praogram ",
                Error: err
            })
        }
    });
}

exports.getProgram = (req, res) => {
    let program_id = req.param("program_id");
    Program.findProgramById(program_id, (err, result) => {
        if (!err) {
            Comment.findByProgramId(program_id, (comErr, commResult) => {
                if (!comErr) {
                    Preference.countByProgramId(program_id, (prefErr, prefResult) => {
                        if (!prefErr) {
                            Episode.programRate(program_id, (rateErr, rateResult) => {
                                if (!rateErr) {
                                    res.status(201).json({
                                        Program: result[0],
                                        comments: commResult,
                                        commentCount: commResult.length,
                                        prefCount: prefResult[0],
                                        rate: rateResult
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
        else {
            res.status(401).json({
                status: "faild to get praogram ",
                Error: err
            })
        }
    });
}

exports.search = (req, res) => {
    let tableName = req.param('tableName');
    let title = req.param('title');
    let description = req.param('description');
    Program.search(tableName, title, description, (err, result) => {
        if (!err) {
            res.status(201).json({
                "output": result
            })
        }
        else {
            res.status(401).json({
                status: "faild to get episode ",
                Error: err
            })
        }
    })
}