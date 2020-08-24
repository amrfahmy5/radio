const User = require("./../models/User");
const con = require("../../config/connection");



exports.singnup = async (req, res, next) => {
    try {
        await User.singnup(req.body);
        res.status(201).json({
            status: "created",
        })
    } catch (err) {
        res.status(401).json({
            status: "faild to create new user ",
            Error: err
        })
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send({
            status: "fail",
            Erorr: "you need to provide email and password"
        })
        return;
    }
    await User.login(req.body, (err, result) => {
        const user = result[0]
        // check the user if matches the one in dbs 
        if (!user) {
            res.status(400).send({
                status: "fail",
                Erorr: "Wrong Email or Password"
            })
            return;
        }
        req.session.userID = user.id;
        req.session.userName = user.user_name;
        res.status(200).json({
            status: "successfully loged in",
            user
        })
    })

}

exports.protect = async (req, res, next) => {
    if (!req.session.userEmail) {
        res.status(401).send({
            status: "fail",
            messegge: "You are not logged in "

        })
        return;
    }
}