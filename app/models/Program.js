const con = require("../../config/connection");

function makePath(id,imgPath,extention){
    return imgPath+id+"."+extention;
}

exports.save = (program,user_id,imgPath,promoPath,extName,validFile,callback)=>{
    console.log(validFile)
    con.query("SELECT max(program_id) FROM program",(err,result)=>{
        id = (result[0]['max(program_id)']!=null)?result[0]['max(program_id)'] +1 : 1
        con.query("INSERT INTO radio.program (program_id,title, description, cover,promo, show_date, user_id) VALUES (? , ? ,? , ? , ? , ? , ?)"
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
    "' WHERE program_id = '"+ program.program_id+"'" 
    console.log(query)
    con.query(query,callback);
    
    /*con.query("UPDATE radio.program SET title  = ? , description =  ? , cover =  ?,promo = ? ,  show_date = ? WHERE id = ?"
                ,[program.title , program.description ,makePath(program.program_id,imgPath,extName) ,makePath(program.program_id,promoPath,"mp3"), program.show_date , program.program_id], callback)*/
}

exports.delete = (id , callback)=>{
    con.query("DELETE FROM radio.program WHERE program_id = ? " ,[id], callback)
}
exports.getAllPrograms = (callback)=>{
    con.query("SELECT p.* , u.user_name FROM radio.program p inner join radio.user u on p.user_id = u.id" , callback)
}
exports.findProgramById = (id , callback)=>{
    con.query(" SELECT  program.* , u1.* , u2.id as montageID,  u2.user_name as montageName, u2.email as montageEmail, u2.img as montageImg ,u3.id as appointmentID,  u3.user_name as appointmentName, u3.email as appointmentEmail , u3.img as appointmentImg  FROM program  LEFT JOIN user as u1 ON u1.id = program.user_id  LEFT JOIN user as u2 ON u2.id = program.userMontage_id LEFT JOIN user as u3 ON u3.id = program.userAppointment_id  WHERE program_id=  ? " ,[id], callback)
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




/*
SELECT program.* , u1.* , u2.id as montageID,  u2.user_name as montageName, u2.email as montageEmail , u2.img as montageImg,
u3.id as appointmentID,  u3.user_name as appointmentName, u3.email as appointmentEmail , u3.img as appointmentImg
FROM `program` 
LEFT JOIN user as u1 ON u1.id = program.user_id 
LEFT JOIN user as u2 ON u2.id = program.userMontage_id 
LEFT JOIN user as u3 ON u3.id = program.userAppointment_id 
WHERE program_id=1
*/