con = require("../../config/connection");

exports.singnup = (req,res,callback)=>{
    con.query(
        "INSERT INTO program" +
        " (user_name, email,password,age,role,img)" +
        " VALUES ('"+req.name+"','"+req.email+"','"+req.password+"','"+req.age+"','"+req.role+"','"+req.img+"')" )
}

exports.login = (req,res,callback)=>{
    return con.query('SELECT * FROM  online_test.student WHERE email = ? AND password = ?',
            [req.email, req.password],callback)
}