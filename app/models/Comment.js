con = require("../../config/connection");

exports.findByPostId = (post_id , callback)=>{
    con.query("SELECT * FROM radio.comment WHERE post_id = ? " ,[post_id], callback)
}
exports.findByEpisodeId = (program_id , callback)=>{
    con.query("SELECT * FROM radio.comment WHERE episode_id = ? " ,[program_id], callback)
}
exports.delete = (id, callback)=>{
    con.query("DELETE FROM radio.comment WHERE id = ? " ,[id], callback)
}
exports.save = (comment, callback)=>{
    con.query("INSERT INTO radio.comment (content, user_id,post_id, episode_id) VALUES (?, ? , ? , ?)"
                ,[comment.content , comment.user_id , comment.post_id,  comment.episode_id], callback)
}
exports.update = (comment , callback)=>{
    con.query("UPDATE radio.comment SET content  = ? WHERE id = ?"
                ,[comment.content , comment.id], callback)
}
