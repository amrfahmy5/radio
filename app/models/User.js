const con = require("../../config/connection");


exports.singnup = (req, callback) => {
    con.query(
        "INSERT INTO user" +
        " (user_name, email,password,age,role,img)" +
        " VALUES ('" + req.name + "','" + req.email + "','" + req.password + "','" + req.age + "','" + req.role + "','" + req.img + "')", callback)
}
exports.login = (user, callback) => {
    con.query('SELECT * FROM  user WHERE email = ? AND password = ?',
        [user.email, user.password], callback)
}

exports.fbSingnup = (req, callback) => {
    con.query(
        "INSERT INTO user (facebookID,user_name, email,password,accessToken,age,role,img) VALUES (?,?,?,?,?,'1','1','img')"
        , [req.id, req.name, req.email, req.password, req.password], callback)
}

exports.fbLogin = (id, callback) => {
    con.query('SELECT * FROM  user WHERE facebookID = ?',
        [id], callback)
}

exports.userSession = (id, callback) => {
    con.query('SELECT * FROM  user WHERE id = ?',
        [id], callback)
}
