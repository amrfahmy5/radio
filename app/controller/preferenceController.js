let Preference = require("../models/Preference");


exports.prefereProgram= (req,res)=>{
    preference = {
        user_id : 1 , // till sesssion work
        program_id : req.body.program_id
    }
    Preference.save(preference, (err , results)=>{
        if (results){
            res.status(200).json({
                status:"created"           
            })
        }
        else  
            {
            res.status(500).json({
                status:"faild to create new preference may program not found ",
                Error:err
            })
        }
    });
        
}
exports.getProgramFollowers = (req, res )=>{
    program_id =  req.param("program_id");
    Preference.findByProgramId(program_id , (err , results)=>{
        status = results.length > 1 ? true : false;
        res.status(200).json({
            status ,
            data :results          
        })
    })
}
exports.getPreferncesOfUser = (req, res )=>{
    user_id =  req.param("user_id");
    Preference.findByUserId(user_id , (err , results)=>{
        status = results.length > 1 ? true : false;
        res.status(200).json({
            status ,
            data :results          
        })
    })
}
exports.removePreference = (req, res )=>{
    preference_id =  req.param("preference_id");
    Preference.delete(preference_id , (err , results)=>{
        status = results.affectedRows === 1 ? true : false;
        res.status(200).json({status})
    })
}