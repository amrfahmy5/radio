const con = require("../../config/connection");

function makePath(id,imgPath,extention){
    return imgPath+id+"."+extention;
}

exports.save = (program,user_id,imgPath,promoPath,extName,validFile,callback)=>{
    console.log(validFile)
    con.query("SELECT max(id) FROM program",(err,result)=>{
        id = (result[0]['max(id)']!=null)?result[0]['max(id)'] +1 : 1
        con.query("INSERT INTO radio.program (id,title, description, cover,promo, show_date, user_id) VALUES (? , ? ,? , ? , ? , ? , ?)"
                ,[id,program.title , program.description ,validFile.img? makePath(id,imgPath,extName):'',validFile.audio?makePath(id,promoPath,"mp3"):''  , program.show_date , user_id], callback)
    })
}   
exports.update = (program,imgPath,promoPath ,extName,validFile, callback)=>{
    console.log(validFile)
    var query = "UPDATE radio.program SET title  = '"+program.title+
    "' , description =  '"+ program.description+
    (validFile.img?("' , cover = '" + makePath(program.program_id,imgPath,extName) ):"")+
    (validFile.audio?("' , promo = '" + makePath(program.program_id,promoPath,"mp3") ):"")+
    "' , show_date = '"+program.show_date+
    "' WHERE id = '"+ program.program_id+"'" 
    console.log(query)
    con.query(query,callback);
    
    /*con.query("UPDATE radio.program SET title  = ? , description =  ? , cover =  ?,promo = ? ,  show_date = ? WHERE id = ?"
                ,[program.title , program.description ,makePath(program.program_id,imgPath,extName) ,makePath(program.program_id,promoPath,"mp3"), program.show_date , program.program_id], callback)*/
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


exports.search = (tableName,title,description,callback)=>{
    let regex =".*"
    title+=regex;
    description+=regex;
    if(String(tableName).match('program'))
        con.query("SELECT * FROM radio.program WHERE title REGEXP ? OR description REGEXP ?",[title,description],callback)
    else if(String(tableName).match('episode'))
    con.query("SELECT * FROM radio.episode WHERE title REGEXP ? OR description REGEXP ?",[title,description],callback)
}