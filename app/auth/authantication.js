const User =require("./../models/User")
const jwt = require("jsonwebtoken")
const {promisify} = require("util");
const sendEmail = require("../utilities/email")


exports.singnup= async(req,res,next)=>{
    
    try{
        const newUser = await User.singnup(req.body);
        res.status(201).json({
            status:"created",
            token:token,
            user:newUser
            
        })
    }catch(err)
    {
        res.status(401).json({
            status:"faild to create new user ",
            Error:err
        })
    }
}

exports.login= async(req,res,next)=>{
    const {email,password}=req.body;

    if(!email || ! password)
        {
            res.status(400).send({
                status:"fail",
                Erorr:"you need to provide email and password"
            })
            return;
        }

    const user =await User.login(req.body)

                // check the password if matches the one in dbs 
    if(!user)
    {
        res.status(400).send({
            status:"fail",
            Erorr:"Wrong Email or Password"
        })
        return;
    }
    req.session.userEmail = req.body.email;
    res.status(200).json({
        status:"successfully loged in",
        token,
        user
    })


}

exports.protect = async(req,res,next)=>{
    if(!req.session.userEmail)
    {
        res.status(401).send({
            status:"fail",
            messegge:"You are not logged in "

        })
        return;
    }
}