let Comment = require("../models/Comment");

function validate(Comment) {
    var state = 1;
    return state;
}
exports.createComment= (req,res)=>{
        comment = {
            content : req.body.content,
            user_id : 1, // till session work
            episode_id : req.body.episode_id,
            program_id : req.body.program_id
        }
        var state = validate(comment);
        if (state === 1){
            Comment.save(comment, (err , results)=>{
                console.log(comment)
                if (results){
                    res.redirect('back')
                }
                else  
                   {
                    res.status(500).json({
                        status:"faild to create new comment may program not found ",
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
exports.findByPostId = (req, res )=>{
    post_id =  req.param("post_id");
    Comment.findByPostId(post_id , (err , results)=>{
        status = results.length > 1 ? true : false;
        res.status(200).json({
            status ,
            data :results          
        })
    })
}
exports.findByEpisodeId = (req, res )=>{
    episode_id =  req.param("episode_id");
    Comment.findByEpisodeId(episode_id , (err , results)=>{
        status = results.length > 1 ? true : false;
        res.status(200).json({
            status ,
            data :results          
        })
    })
}
exports.removeComment = (req, res )=>{
    comment_id =  req.param("comment_id");
    Comment.delete(comment_id , (err , results)=>{
        status = results.affectedRows === 1 ? true : false;
        res.status(200).json({status})
    })
}
exports.updateComment= (req,res)=>{
    comment = {
        content : req.body.content,
        id : req.body.comment_id
    }
    var state = validate(comment);
    if (state === 1){
        Comment.update(comment , (err , results)=>{
            console.log(comment)
            if (results.affectedRows > 0){
                res.status(200).json({
                    status:"updated"           
                })
            }
            else  
               {
                res.status(500).json({
                    status:"faild to update comment may its program not found ",
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