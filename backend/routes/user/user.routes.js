const express=require("express");
const { requireSignin,isAdmin,isAuth } = require("../../controller/user/auth.controller");

const router=express.Router();
const { userById } = require("../../controller/user/user.controller");


router.get('/new/:userId',requireSignin,isAdmin,isAuth,(req,res)=>{
    res.json({
        user:req.profile
    })
})


router.param('userId',userById)

module.exports=router