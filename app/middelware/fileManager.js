
var formidable = require('formidable');
var fs = require('fs');
exports.uploadFile = (files, imgPath)=>//path after public
{
    if (!files.file.name) {
        return;
    }
    let ext = files.file.name.split('.')
    let extName="." + ext[ext.length - 1];
    var readStream = fs.createReadStream(files.file.path);
    let mainPath = process.env.PWD +"/public"+ imgPath +extName
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