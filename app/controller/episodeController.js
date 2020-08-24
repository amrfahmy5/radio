let Episode = require("../models/Episode");

function uploadAudioFile(audio){
    return "path";
}
function validate(episode) {
    var state = 1;
    return state;
}
exports.createEpisode= (req,res)=>{
        episode = {
            title : req.body.title,
            description : req.body.description,
            duration  : req.body.duration,
            episode_content : uploadAudioFile(req.body),
            program_id : req.body.program_id
        }
        var state = validate(episode);
       
        user_id =  1 //req.session.user_id ;
        if (state === 1){
            Episode.save(episode , user_id, (err , results)=>{
                if (results){
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