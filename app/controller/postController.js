let Post = require("../models/Post");

function uploadImg(audio){
    return "path";
}
function validate(Post) {
    var state = 1;
    return state;
}
exports.createPost= (req,res)=>{
        post = {
            content : req.body.content,
            img : uploadImg(req.body.img),
            program_id : req.body.program_id
        }
        var state = validate(post);
        if (state === 1){
            Post.save(post, (err , results)=>{
                if (results){
                    res.status(200).json({
                        status:"created"           
                    })
                }
                else  
                   {
                    res.status(500).json({
                        status:"faild to create new post may program not found ",
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
    Post.findByProgramId(program_id , (err , results)=>{
        status = results.length > 1 ? true : false;
        res.status(200).json({
            status ,
            data :results          
        })
    })
}
exports.removePost = (req, res )=>{
    post_id =  req.param("post_id");
    Post.delete(post_id , (err , results)=>{
        status = results.affectedRows === 1 ? true : false;
        res.status(200).json({status})
    })
}
exports.updatePost= (req,res)=>{
    post = {
        content : req.body.content,
        img : uploadImg(req.body.img),
        id : req.body.post_id
    }
    var state = validate(post);
    if (state === 1){
        Post.update(post , (err , results)=>{
            console.log(post)
            if (results.affectedRows > 0){
                res.status(200).json({
                    status:"updated"           
                })
            }
            else  
               {
                res.status(500).json({
                    status:"faild to update post may its program not found ",
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