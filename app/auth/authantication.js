exports.isLogged = (req, res, next) => {
    if (req.isAuthenticated())
        res.redirect('/user/')
    else
        next();
}

exports.logout = (req, res, next) => {
    req.logOut();
    res.redirect('/users/login');
}











//-----------------------pure authantication-----------------
/*
const User = require("./../models/User");


async function intializeSession(req,id,user_name)
{
    req.session.userID = id;
    req.session.userName = user_name;
}

exports.singnup = async (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.role) {
        res.status(400).send({
            status: "fail",
            Erorr: "you need to provide name and email and password and role"
        })
        return;
    }
    await User.singnup(req.body,async (err, result) => {
        if (result) {
            await intializeSession(req,result.insertId,req.body.name)
            res.status(201).json({
                status: "created",
            })
            return;
        }
        else {
            res.status(400).send({
                status: "fail",
                Erorr: "Error in Inserting"
            })
            return;
        }
    });


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
    await User.login(req.body, async (err, result) => {
        const user = result[0]
        // check the user if matches the one in dbs 
        if (!user) {
            res.status(400).send({
                status: "fail",
                Erorr: "Wrong Email or Password"
            })
            return;
        }
        await intializeSession(req,user.id,user.user_name)
        res.status(200).json({
            status: "successfully loged in",
            user
        })
    })

}

exports.protect = async (req, res, next) => {
    if (!req.session.userName||!req.session.userID) {
        res.status(401).send({
            status: "fail",
            messegge: "You are not logged in "

        })
        return;
    }
}

*/