const Applicant=require('../../model/DirectApplicant/applicant.model')
const sequelize = require("../../model/connection")
const { QueryTypes } = require('sequelize');


exports.create=async(req,res,arg)=>{
    try {
        console.log(req.params.caseno);
        const applicant=await  Applicant.create({
            caseno:parseInt(req.body.caseno),
            fullname:req.body.fullname,
            gender: req.body.gender,
            address:req.body.address,
            postoffice: req.body.postoffice,
            policestation: req.body.policestation,
            district: req.body.district,
            pincode: parseInt(req.body.pincode),
            state: req.body.state,
            emailid: req.body.emailid,
            teleno: req.body.teleno,
            mobno:req.body.mobno,
        })
        return  res.json(applicant);
        
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({ message: "Fail to create" });
    }      
   
}

exports.list=async(req,res)=>{
    const list=await sequelize.query("SELECT fullname, gender, address, postoffice, "+
    "policestation, district, pincode, state, emailid, teleno, mobno, caseno FROM applicants;",{
        logging:console.log,
        type: QueryTypes.SELECT,
        row:true
    })
    
    if(!list){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:list
        })
    }
  }

exports.fetchapplicant=async(req,res)=>{
    const fetchapplicant=await sequelize.query("SELECT fullname, gender, address, postoffice, "+
    "policestation, district, pincode, state, emailid, teleno, mobno, "+
    "caseno FROM applicants where caseno='"+req.query.caseno+"'",{
        logging:console.log,
        type: QueryTypes.SELECT,
        row:true
    })
    
    if(!fetchapplicant){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:fetchapplicant
        })
    }
  }
  
  exports.updateapplicant=async(req,res)=>{
    const updateapplicant=await sequelize.query("UPDATE applicants set fullname='"+req.body.fullname+"',"+
    "gender='"+req.body.gender+"',address='"+req.body.address+"',postoffice='"+req.body.postoffice+"',"+
    "policestation='"+req.body.policestation+"',district='"+req.body.district+"',pincode='"+parseInt(req.body.pincode)+"',"+
    "state='"+req.body.state+"',emailid='"+req.body.emailid+"',teleno='"+req.body.teleno+"',mobno='"+req.body.mobno+"'"+
    "where caseno='"+req.query.caseno+"'",{
    })
    if(!updateapplicant){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:updateapplicant
        })
    }
  }
  
  exports.deleteapplicant=async(req,res)=>{
    const deleteapplicant=await sequelize.query("DELETE FROM applicants where caseno='"+req.query.caseno+"'",{
    })
    
    if(!deleteapplicant){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:deleteapplicant
        })
    }
  }
  exports.delete=()=>{
    
  }