const Feesdetails=require('../../model/feesdetails/feesdetails.model')
const sequelize = require("../../model/connection")
const { QueryTypes } = require('sequelize');

exports.create=async(req,res)=>{
    console.log(req.body);
    try {
        const feesdetails=await  Feesdetails.create({
            caseno:parseInt(req.body.caseno),
            apply:req.body.apply,
            type:req.body.type,
            numbers: req.body.numbers,
            nos:parseInt(req.body.nos),
            paymentdate: req.body.paymentdate,
            totalamount: req.body.totalamount
            
        })
        return  res.json(feesdetails);
        
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({ message: "Fail to create" });
        
    }
}
exports.list=async(req,res)=>{
    const list=await sequelize.query("SELECT apply, type,numbers, nos,"+
    " paymentdate,totalamount, caseno FROM feesdetails;",{
        logging:console.log,
        type: QueryTypes.SELECT,
        row:true
    })
    
    if(!list){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{       return res.status(200).json({
 
            data:list
        })
    }
  }

exports.fetchfees=async(req,res)=>{
    const fetchfees=await sequelize.query("SELECT  apply, type,numbers, nos,"+
    " paymentdate,totalamount, caseno "+
    "FROM feesdetails where caseno='"+req.query.caseno+"'",{
        logging:console.log,
        type: QueryTypes.SELECT,
        row:true
    })
    
    if(!fetchfees){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:fetchfees
        })
    }
  }
  
  exports.updatefees=async(req,res)=>{
    const updatefees=await sequelize.query("UPDATE feesdetails set apply='"+req.body.apply+"',"+
    "type='"+req.body.type+"',numbers='"+req.body.numbers+"',nos='"+parseInt(req.body.nos)+"',"+
    "paymentdate='"+req.body.paymentdate+"',totalamount='"+req.body.totalamount+"' where caseno='"+req.query.caseno+"'",{
    })
    if(!updatefees){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:updatefees
        })
    }
  }
  
  exports.deletefees=async(req,res)=>{
    const deletefees=await sequelize.query("DELETE FROM feesdetails where caseno='"+req.query.caseno+"'",{
    })
    
    if(!deletefees){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:deletefees
        })
    }
  }