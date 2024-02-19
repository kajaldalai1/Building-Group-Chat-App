const jwt=require('jsonwebtoken')
const User=require('../models/usergroup')

const authenticate=(req,res,next)=>{
    try{
        const token=req.header('Authorization')
        const user=jwt.verify(token,'FTPAUPVdCNjU0i6FIoq5Heuj');
        User.findByPk(user.userId).then(user=>{
            req.user=user;
            next();
        }).catch(err=>{throw new Error(err)})
    }
    catch(err){
        console.log("error"+err)
        return res.status(400).json({success:fail})
    }
}

module.exports={
    authenticate
}