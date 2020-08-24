const multer=require("multer");
const sharp = require("sharp");


// upload Places images

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

exports.upladPlaceCover=upload.fields([
    {name:"mainImgPath",maxCount:1},
    {name:"imaArrary",maxCount:3}
])


exports.resizeCover=async(req,res,next)=>{
  
    if(!req.files.mainImgPath || !req.files.imaArrary ) return next();

    const url=req.protocol+"://"+req.get("host");
    const imageCover=`tour-${req.body.name}+${Date.now()}-cover.jpeg`;
    req.body.mainImgPath=url+"/images/"+imageCover;

    await sharp(req.files.mainImgPath[0].buffer)
    .resize(2000,1333)
    .toFormat('jpeg')
    .jpeg({quality:90})
    .toFile(`images/${imageCover}`)
    
    req.body.imaArrary=[];
    await Promise.all(
        req.files.imaArrary.map( async(file,i) => {
            const url=req.protocol+"://"+req.get("host");
            const subImage=`place-${Date.now()}-${i+1}-sub.jpeg`
            await sharp(file.buffer)
            .resize(500,500)
            .toFormat('jpeg')
            .jpeg({quality:90})
            .toFile(`images/${subImage}`)
    
            req.body.imaArrary.push(url+'/images/'+subImage);
        })
    );


  next();
}