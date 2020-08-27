const con = require("../../config/connection");


exports.singnup = (req,callback)=>{
    con.query(
        "INSERT INTO user" +
        " (user_name, email,password,age,role,img)" +
        " VALUES ('"+req.name+"','"+req.email+"','"+req.password+"','"+req.age+"','"+req.role+"','"+req.img+"')" ,callback)
}

exports.login = (user,callback)=>{
    con.query('SELECT * FROM  user WHERE email = ? AND password = ?',
            [user.email, user.password],callback)
}
// Controller Later
exports.follow = (user_id , follower_id, callback)=>{
    con.query("INSERT INTO radio.follow (user_id, user_follow_id) VALUES (? , ? )"
                ,[user_id ,follower_id ], callback)
}


