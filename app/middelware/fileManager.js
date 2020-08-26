
var formidable = require('formidable');
var fs = require('fs');
const { concatSeries } = require('async');
exports.uploadFile = (files, imgPath,callback)=>//path after public
{
    let ext = files.file.name.split('.')
    let extName=ext[ext.length - 1];
    if (!files.file.name||!(extName=='jpg'|| extName=='png'|| extName=='PNG'|| extName=='mp3')){
        callback(false);
        return ;
    }
    var readStream = fs.createReadStream(files.file.path);
    let mainPath = process.env.PWD +"/public"+ imgPath +"." +extName
    var writeStream = fs.createWriteStream(mainPath);
    readStream.pipe(writeStream);
    readStream.on('end', function () {
        fs.unlinkSync(files.file.path);
        callback(true) ;
        return 
    });
}
exports.deleteFile= function (imgPath) {
    let mainPath = process.env.PWD + +"/public"+ imgPath
    try {
        fs.unlink(mainPath, () => { })
    } catch (error) {
        throw error
    }

}