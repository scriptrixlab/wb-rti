const express=require('express');
const multer = require('multer');
const { create,list,fetchquery,updatequery,deletequery } = require('../../controller/applicationquery/query.controller');
const { isAuth, isAdmin ,requireSignin} = require('../../controller/user/auth.controller');
const upload =multer({ dest: '/upload'})
const router=express.Router()


router.post('/create/query', create);
router.get("/query/list",list)
router.get("/query/fetch",fetchquery)
router.put("/query/update",updatequery)
router.delete("/query/delete",deletequery)


module.exports=router