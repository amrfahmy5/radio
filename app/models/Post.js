let con = require("../../config/connection");

exports.getAllPosts = (callback)=>{
    con.query("SELECT * FROM radio.post" , callback)
}
exports.findById = (id , callback)=>{
    con.query("SELECT * FROM radio.post WHERE id = ? " ,[id], callback)
}
exports.findByProgramId = (program_id , callback)=>{
    con.query("SELECT * FROM radio.post WHERE program_id = ? " ,[program_id], callback)
}
exports.delete = (id, callback)=>{
    con.query("DELETE FROM radio.post WHERE id = ? " ,[id], callback)
}
exports.save = (post, callback)=>{
    con.query("INSERT INTO radio.post (content, img, program_id) VALUES (? , ? , ?)"
                ,[post.content , post.img , post.program_id], callback)
}
exports.update = (post , callback)=>{
    con.query("UPDATE radio.post SET content  = ? , img =  ? WHERE id = ?"
                ,[post.content , post.img , post.id], callback)
}