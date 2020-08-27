
var formidable = require('formidable');
var fs = require('fs');
const { concatSeries } = require('async');


exports.getExtetion= (name)=>{
    let imgExt=name.split('.');
    return imgExt[imgExt.length - 1] ;
}
exports.uploadFile = (file, imgPath,callback)=>//path after public
{
    let extName = this.getExtetion(file.name)
    if (!file.name||!(extName=='jpg'|| extName=='png'|| extName=='PNG'|| extName=='mp3')){
        callback(false);
        return ;
    }
    var readStream = fs.createReadStream(file.path);
    let mainPath = process.env.PWD +"/public"+ imgPath +"." +extName
    var writeStream = fs.createWriteStream(mainPath);
    readStream.pipe(writeStream);
    readStream.on('end', function () {
        fs.unlinkSync(file.path);
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