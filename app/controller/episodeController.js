const Episode = require("../models/Episode");
var path = '/Audio/episodes/';
var formidable = require('formidable');
const fileManager = require("../middelware/fileManager")
const validator = require("../middelware/validator")



exports.createEpisode= (req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        episode = fields;
        var state = validator.validateEpisode(episode);
        user_id =  1 //req.session.user_id ;
        if (state === 1){
            Episode.save(episode , user_id, path, (err , results)=>{
                if (results){
                    fileManager.uploadFile(files, path + results.insertId)
                    res.status(200).json({
                        status:"created"           
                    })
                }
                else  
                    {
                    res.status(500).json({
                        status:"faild to create new episode may program not found ",
                        Error:err
                    })
                }
            });
                
            
        }
        else{
            res.status(500).json({
                error:state           
            })
        }
    })    
}
exports.findByProgramId = (req, res )=>{
    program_id =  req.param("program_id");
    Episode.findByProgramId(program_id , (err , results)=>{
        status = results.length > 1 ? true : false;
        res.status(200).json({
            status ,
            data :results          
        })
    })
}
exports.removeEpisode = (req, res )=>{
    episode_id =  req.param("episode_id");
    Episode.delete(episode_id , (err , results)=>{
        console.log(results.affectedRows);
        status = results.affectedRows === 1 ? true : false;
        res.status(200).json({
            status        
        })
    })
}
exports.updateEpisode= (req,res)=>{
    episode = {
        title : req.body.title,
        description : req.body.description,
        duration  : req.body.duration,
        episode_content : uploadAudioFile(req.body),
        episode_id : req.body.episode_id
    }
    var state = validate(episode);
   
    user_id =  1 //req.session.user_id ;
    if (state === 1){
        Episode.update(episode , (err , results)=>{
            if (results.affectedRows > 0){
                res.status(200).json({
                    status:"updated"           
                })
            }
            else  
               {
                res.status(500).json({
                    status:"faild to update episode may its program not found ",
                    Error:err
                })
            }
        });
         
        
    }
    else{
        res.status(500).json({
            error:state           
        })
    }
}