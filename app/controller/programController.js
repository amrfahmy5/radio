const Program = require('../models/Program')
const con = require('../../config/connection')
var formidable = require('formidable');
const fileManager = require("../middelware/fileManager")


var imgPath = '/images/programImage/';


exports.createProgram = (req, res) => {
    
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //let USER_ID = req.session.userID
        let USER_ID = 1

        let ext = files.file.name.split('.')
        let extName=ext[ext.length - 1];

        Program.save(fields, USER_ID,imgPath,extName , (err, result) => {
            var socket = require('../socket-io/notfication')
            socket.newProgram(fields)
            if (!err) {
                fileManager.uploadFile(files, imgPath + result.insertId,(uploaded)=>{
                    res.status(201).json({
                        status: "created",
                        image:(uploaded)?"image saved":"image not saved"
                    })
                })
            }
            else {
                res.status(401).json({
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

        let ext = files.file.name.split('.')
        let extName=ext[ext.length - 1];

        Program.update(fields,imgPath,extName, (err, result) => {
            if (!err) {
                fileManager.uploadFile(files, imgPath + result.program_id,(uploaded)=>{
                    res.status(201).json({
                        status: "updated",
                        image:(uploaded)?"image updated":"image not updated"
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

exports.deleteProgram = (req, res) => {
    let program_id = req.param("program_id");
    Program.delete(program_id, (err, result) => {
        if (!err) {
            res.status(201).json({
                status:(result.affectedRows==1)? "deleted":"notFounded"
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
            res.status(201).json({
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
            res.status(201).json({
                Programs: result[0]
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

exports.search= (req,res)=>{
    let tableName = req.param('tableName');
    let title = req.param('title');
    let description = req.param('description');
    Program.search(tableName,title,description,(err,result)=>{
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