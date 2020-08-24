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

exports.upladUserCover=upload.single("photo");

exports.resizeCover=async(req,res,next)=>{
    
    if(!req.file) return next();

    const url=req.protocol+"://"+req.get("host");
    const userImage=`user-${req.user.id}+${Date.now()}-user-cover.jpeg`;
    req.body.photo=url+"/images/user-image/"+userImage;

    await sharp(req.file.buffer)
    .resize(2000,1333)
    .toFormat('jpeg')
    .jpeg({quality:90})
    .toFile(`images/user-image/${userImage}`)
    

  next();
  
}