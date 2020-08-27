let con = require("../../config/connection");


exports.findByProgramId = (program_id , callback)=>{
    con.query("SELECT * FROM radio.preference p INNER JOIN radio.user u ON p.user_id = u.id WHERE p.program_id = ? " ,[program_id], callback)
}
exports.findByUserId = (user_id , callback)=>{
    con.query("SELECT * FROM radio.preference pre INNER JOIN radio.program pro ON pre.program_id = pro.id WHERE pre.user_id =  ? " ,[user_id], callback)
}
exports.delete = (id, callback)=>{
    con.query("DELETE FROM radio.preference WHERE id = ? " ,[id], callback)
}
exports.save = (preference, callback)=>{
    con.query("INSERT INTO radio.preference (user_id, program_id) VALUES (? , ?)"
                ,[preference.user_id , preference.program_id], callback)
}
