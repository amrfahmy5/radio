const Program = require('../models/Program')


exports.createProgram=async (req,res)=>{
    try{
        USER_ID = 1 // till session work
        await Program.save(req.body , USER_ID);
        res.status(201).json({
            status:"created"           
        })
    }catch(err)
    {
        res.status(401).json({
            status:"faild to create new praogram ",
            Error:err
        })
    }
}

exports.updateProgram= async (req,res)=>{
    try{
        await Program.update(req.body);
        res.status(201).json({
            status:"updated"  
        })
    }catch(err)
    {
        res.status(401).json({
            status:"faild to update program ",
            Error:err
        })
    }
}

exports.deleteProgram= async (req,res)=>{
    try{
        await Program.delete(req.body);
        res.status(201).json({
            status:"deleted"  
        })
    }catch(err)
    {
        res.status(401).json({
            status:"faild to delete program ",
            Error:err
        })
    }
}