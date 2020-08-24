con = require("../../config/connection");

exports.getAllPrograms = (callback)=>{
    con.query("SELECT * FROM radio.program" , callback)
}
exports.findProgramById = (id , callback)=>{
    con.query("SELECT * FROM radio.program WHERE id = ? " ,[id], callback)
}
exports.delete = (id , callback)=>{
    con.query("DELETE FROM radio.program WHERE id = ? " ,[id], callback)
}
exports.save = (program , user_id , callback)=>{
    con.query("INSERT INTO radio.program (title, description, cover, show_date, user_id) VALUES (? , ? , ? , ? , ?)"
                ,[program.title , program.description , program.cover , program.show_date , user_id], callback)
}
exports.update = (program , callback)=>{
    con.query("UPDATE radio.program SET title  = ? , description =  ? , cover =  ? ,  show_date = ? WHERE id = ?"
                ,[program.title , program.description , program.cover , program.show_date , program.id], callback)
}
