const express=require('express')
const { create,list,fetchfees,updatefees,deletefees } = require('../../controller/feesdetails/feesdetails.controller');

const router=express.Router()

router.post('/create/fees',create);
router.get("/fees/list",list)
router.get("/fees/fetch",fetchfees)
router.put("/fees/update",updatefees)
router.delete("/fees/delete",deletefees)


module.exports=router