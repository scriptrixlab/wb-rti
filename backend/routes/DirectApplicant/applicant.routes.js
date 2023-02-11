const express=require('express')
const { create,list,fetchapplicant,updateapplicant,deleteapplicant } = require('../../controller/DirectApplicant/applicant.controller');
const { isAuth, isAdmin ,requireSignin} = require('../../controller/user/auth.controller');
const { isAuthenticated } = require("../../middleware");
const router=express.Router()

router.post('/create/applicant',create)
router.get("/applicant/list",list)
router.get("/applicant/fetch",fetchapplicant)
router.put("/applicant/update",updateapplicant)
router.delete("/applicant/delete",deleteapplicant)

module.exports=router