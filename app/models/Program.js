const con = require("../../config/connection");

function makePath(id,imgPath,extention){
    return imgPath+id+"."+extention;
}

exports.save = (program,user_id,imgPath,extName,callback)=>{
    con.query("SELECT max(id) FROM program",(err,result)=>{
        id = (result[0]['max(id)']!=null)?result[0]['max(id)'] +1 : 1
        con.query("INSERT INTO radio.program (id,title, description, cover, show_date, user_id) VALUES (? , ? , ? , ? , ? , ?)"
                ,[id,program.title , program.description , makePath(id,imgPath,extName) , program.show_date , user_id], callback)
    })
}   
exports.update = (program,imgPath ,extName, callback)=>{
    con.query("UPDATE radio.program SET title  = ? , description =  ? , cover =  ? ,  show_date = ? WHERE id = ?"
                ,[program.title , program.description ,makePath(program.program_id,imgPath,extName) , program.show_date , program.program_id], callback)
}



exports.delete = (id , callback)=>{
    con.query("DELETE FROM radio.program WHERE id = ? " ,[id], callback)
}
exports.getAllPrograms = (callback)=>{
    con.query("SELECT * FROM radio.program" , callback)
}
exports.findProgramById = (id , callback)=>{
    con.query("SELECT * FROM radio.program WHERE id = ? " ,[id], callback)
}
