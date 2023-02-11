const express=require('express')
const { sayHi, adduser, signin, signout, profile } = require('../../controller/user/auth.controller')
const { isAuthenticated } = require('../../middleware')
const {signupValidator}=require("../../validator/index")
const router=express.Router()

router.get('/',sayHi)
router.post('/adduser',adduser,signupValidator)
router.post('/signin',signin)
router.get('/user-profile', isAuthenticated, profile)

router.get('/signout',signout)
module.exports=router;