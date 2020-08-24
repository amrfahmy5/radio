const multer=require("multer");
const sharp = require("sharp");


/*
const multerStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images/place-image")
    }
    ,
    filename:(req,file,cb)=>{
        cb(null,"")
    }
});*/


const multerStorage=multer.memoryStorage();

const multerFilter= (req,file,cb)=>{

    if(file.mimetype.startsWith("image"))
        cb(null,true)


    else{
        cb('Error with image upladed' ,false);
    }

}

const upload=multer({
    storage:multerStorage,
    fileFilter:multerFilter
})

exports.upladDocumentCover=upload.single("documentPhoto")
exports.resizeCover=async(req,res,next)=>{
    
    if(!req.file) return next();

    const url=req.protocol+"://"+req.get("host");
    const requestImage=`request-${req.userData.id}+${Date.now()}.jpeg`;
    req.body.doucmentPhoto=url+"/images/request-image/"+requestImage;
    await sharp(req.file.buffer)
    .resize(2000,1333)
    .toFormat('jpeg')
    .jpeg({quality:90})
    .toFile(`images/request-image/${requestImage}`)
    

  next();
  
}