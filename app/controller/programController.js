const Program = require('../models/Program')
const con = require('../../config/connection')
//upload
var formidable = require('formidable');
var fs = require('fs');
var imgPath = '/images/programImage/';

function uploadFile(files, imgPath)//path after public
{
    if (!files.file.name) {
        return;
    }
    var readStream = fs.createReadStream(files.file.path);
    let mainPath = process.env.PWD +"/public"+ imgPath + ".png"
    var writeStream = fs.createWriteStream(mainPath);
    console.log(mainPath)
    readStream.pipe(writeStream);
    readStream.on('end', function () {
        fs.unlinkSync(files.file.path);
    });
}

function deleteFile(imgPath) {
    let mainPath = process.env.PWD + +"/public"+ imgPath + ".png"
    try {
        fs.unlink(mainPath, () => { })
    } catch (error) {
        throw error
    }

}


exports.createProgram = (req, res) => {
    
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //let USER_ID = req.session.userID
        let USER_ID = 1
        Program.save(fields, USER_ID, imgPath, (err, result) => {
            if (!err) {
                uploadFile(files, imgPath + result.insertId)
                res.status(201).json({
                    status: "created"
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
        Program.update(fields,imgPath, (err, result) => {
            if (!err) {
                console.log(result)
                uploadFile(files, imgPath + fields.program_id)
                res.status(201).json({
                    status:(result.affectedRows==1)? "updated":"notFounded"
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
            deleteFile(imgPath + program_id);
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

