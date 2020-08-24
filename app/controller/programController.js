const Program = require('../models/Program')


exports.createProgram=async (req,res)=>{
    try{
        await Program.createProgam(req.body);
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
        await Program.updateProgram(req.body);
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
        await Program.deleteProgram(req.body);
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