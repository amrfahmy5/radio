let con = require("../../config/connection");

function makePath(id,path,extention){
    return path+id+"."+extention;
}
exports.save = (episode , user_id, path,callback)=>{
    con.query("SELECT max(id) FROM episode",(err,result)=>{
        id = (result[0]['max(id)']!=null)?result[0]['max(id)'] +1 : 1
        con.query("INSERT INTO radio.episode (id,title, description, duration, episode_content, user_id , program_id) VALUES (?,? , ? , ? , ? , ? , ?)"
          ,[id,episode.title , episode.description , episode.duration , makePath(id,path ,"mp3") , user_id , episode.program_id], callback)
        })
}
exports.update = (episode,path , callback)=>{
    con.query("UPDATE radio.episode SET title  = ? , description =  ? , duration =  ? , episode_content = ? WHERE id = ?"
                ,[episode.title , episode.description , episode.duration ,makePath(episode.episode_id,path ,"mp3") , episode.episode_id], callback)
}



exports.findByProgramId = (program_id , callback)=>{
    con.query("SELECT * FROM radio.episode WHERE episode.program_id = ? " ,[program_id], callback)
}
exports.delete = (id , callback)=>{
    con.query("DELETE FROM radio.episode WHERE id = ? " ,[id], callback)
}




//-------------------------------------new--------------------------------
exports.watch = (user_id,episode_id,callback)=>{
    con.query("select * from radio.rate where user_id=? and episode_id=?",[user_id,episode_id],(err,result)=>{
        if(result.length==0){
            con.query("INSERT INTO radio.rate(user_id, episode_id, rate,watch) VALUES (?,?,0,1)",[user_id,episode_id],callback)
        }
        else
            callback(null,"watchedBefor")
    })
}

exports.insertRate = (user_id,episode_id,rate,callback)=>{
    con.query("select * from radio.rate where user_id=? and episode_id=?",[user_id,episode_id],(err,result)=>{
        if(result.length!=0){
            con.query("UPDATE radio.rate SET  rate = ? WHERE user_id = ? and  episode_id =  ? ",[rate,user_id,episode_id],callback)
        }
    })
}

exports.episodeRate = (episode_id,callback)=>{
    con.query("select SUM(rate)/COUNT(episode_id) as rate from radio.rate where episode_id=? and rate!=0",[episode_id],callback)
}




//----------------------------------future----------------
exports.findById = (id , callback)=>{
    con.query("SELECT * FROM radio.episode WHERE id = ? " ,[id], callback)
}
exports.getAllEpisodes = (callback)=>{
    con.query("SELECT * FROM radio.episode" , callback)
}

