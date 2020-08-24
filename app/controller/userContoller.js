//upload
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

function uploadImage(req,subPath,callback)//path after public
{
    var form = new formidable.IncomingForm();
    var mainPath= ''
    form.parse(req,function  (err, fields, files) {
        var readStream=fs.createReadStream(files.file.path);
        let fileName= "/"+req.session.userID+"-"+ files.file.name
        mainPath=path.join(process.env.PWD+'/public',subPath+fileName )
        console.log(mainPath)
        var writeStream=fs.createWriteStream(mainPath);
        readStream.pipe(writeStream);
        readStream.on('end',function(){
            fs.unlinkSync(files.file.path);
            callback(mainPath)
        
        }); 
    });
}