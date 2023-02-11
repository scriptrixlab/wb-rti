const express=require('express')
const { create,list,fetchothers,updateothers,deleteothers } = require('../../controller/others/others.controller');
const { isAuth, isAdmin ,requireSignin} = require('../../controller/user/auth.controller');
const router=express.Router()

router.post('/create/others',create);
router.get("/others/list",list)
router.get("/others/fetch",fetchothers)
router.put("/others/update",updateothers)
router.delete("/others/delete",deleteothers)

module.exports=router