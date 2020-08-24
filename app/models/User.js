const con = require("../../config/connection");


exports.singnup = (req,res,callback)=>{
    con.query(
        "INSERT INTO user" +
        " (user_name, email,password,age,role,img)" +
        " VALUES ('"+req.name+"','"+req.email+"','"+req.password+"','"+req.age+"','"+req.role+"','"+req.img+"')" )
}

exports.login = (user,callback)=>{
    con.query('SELECT * FROM  user WHERE email = ? AND password = ?',
            [user.email, user.password],callback)
}