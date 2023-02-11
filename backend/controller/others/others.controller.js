const Others=require('../../model/others/others.model')
const sequelize = require("../../model/connection")
const { QueryTypes } = require('sequelize');

exports.create=async(req,res)=>{
   try {
    console.log(req.body)
    const others=await  Others.create({
        caseno:req.body.caseno,
        authorityname:req.body.authorityname,
        officername:req.body.officername,
        designation: req.body.designation,
        address:req.body.address,
        postoffice: req.body.postoffice,
        policestation: req.body.policestation,
        district: req.body.district,
        pincode: req.body.pincode,
    })
    return  res.json(others);
    
   } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ message: "Fail to create" });
   }
   
}


exports.list=async(req,res)=>{
    const list=await sequelize.query("SELECT authorityname, officername,designation, address,"+
    " postoffice,policestation, district, pincode, caseno FROM others;",{
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

exports.fetchothers=async(req,res)=>{
    const fetchothers=await sequelize.query("SELECT authorityname, officername,designation, "+
    "address, postoffice,policestation, district, pincode, caseno "+
    "FROM others where caseno='"+req.query.caseno+"'",{
        logging:console.log,
        type: QueryTypes.SELECT,
        row:true
    })
    
    if(!fetchothers){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:fetchothers
        })
    }
}
  
  exports.updateothers=async(req,res)=>{
    const updateothers=await sequelize.query("UPDATE others set authorityname='"+req.body.authorityname+"',"+
    "officername='"+req.body.officername+"',designation='"+req.body.designation+"',address='"+req.body.address+"',"+
    "postoffice='"+req.body.postoffice+"',policestation='"+req.body.policestation+"',district='"+req.body.district+"',"+
    "pincode='"+parseInt(req.body.pincode)+"'where caseno='"+req.query.caseno+"'",{
    })
    if(!updateothers){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:updateothers
        })
    }
  }
  
  exports.deleteothers=async(req,res)=>{
    const deleteothers=await sequelize.query("DELETE FROM others where caseno='"+req.query.caseno+"'",{
    })
    
    if(!deleteothers){
        res.status(500).json({
                        msg:"Error"
                    })
    }else{
        return res.status(200).json({
            data:deleteothers
        })
    }
  }