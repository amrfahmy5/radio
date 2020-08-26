con = require("../../config/connection");

exports.getAllEpisodes = (callback)=>{
    con.query("SELECT * FROM radio.episode" , callback)
}
exports.findById = (id , callback)=>{
    con.query("SELECT * FROM radio.episode WHERE id = ? " ,[id], callback)
}
exports.findByProgramId = (program_id , callback)=>{
    con.query("SELECT * FROM radio.episode WHERE program_id = ? " ,[program_id], callback)
}
exports.delete = (id , callback)=>{
    con.query("DELETE FROM radio.episode WHERE id = ? " ,[id], callback)
}
exports.save = (episode , user_id, path,callback)=>{
    con.query("SELECT max(id) FROM episode",(err,result)=>{
        id = (result[0]['max(id)']!=null)?result[0]['max(id)'] +1 : 1
        con.query("INSERT INTO radio.episode (id,title, description, duration, episode_content, user_id , program_id) VALUES (?,? , ? , ? , ? , ? , ?)"
          ,[id,episode.title , episode.description , episode.duration , path + id + ".mp3" , user_id , episode.program_id], callback)
        })
}
exports.update = (episode , callback)=>{
    con.query("UPDATE radio.episode SET title  = ? , description =  ? , duration =  ? , episode_content = ? WHERE id = ?"
                ,[episode.title , episode.description , episode.duration ,episode.episode_content , episode.episode_id], callback)
}
