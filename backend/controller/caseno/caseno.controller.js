const CaseNo = require("../../model/caseno/caseno.model.js");
const sequelize = require("../../model/connection")
const { QueryTypes } = require('sequelize');

exports.create = async (arg, req, res, next) => {
  try {
    console.log( arg.user);
    const caseno = await CaseNo.create({
      date_of_application: req.body.date_of_application,
      date_of_received: req.body.date_of_received,
      apply: req.body.apply,
      userId: parseInt(arg?.user?.userId),
    });
    return res.json(caseno);
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ message: "Fail to create" });
  }
};

exports.list=async(req,res)=>{
  const casenos=await CaseNo.findAll({
    attributes:['caseno', 'date_of_application', 'date_of_received', 
    'apply', 'userId',]
  })
   
  
  return res.json(casenos)
}

exports.fetchcaseno=async(req,res)=>{
  const fetchcaseno=await sequelize.query("SELECT caseno,date_of_application,"+
   "date_of_received,apply from casenos where caseno='"+req.query.caseno+"'",{
      logging:console.log,
      type: QueryTypes.SELECT,
      row:true
  })
  
  if(!fetchcaseno){
      res.status(500).json({
                      msg:"Error"
                  })
  }else{
      return res.status(200).json({
          data:fetchcaseno
      })
  }
}

exports.updatecaseno=async(req,res)=>{
  const updatecaseno=await sequelize.query("UPDATE casenos set date_of_application='"+req.body.date_of_application+"',"+
  "date_of_received='"+req.body.date_of_receive+"', apply='"+req.body.apply+"' "+
  "where caseno='"+req.query.caseno+"'",{
  })
  if(!updatecaseno){
      res.status(500).json({
                      msg:"Error"
                  })
  }else{
      return res.status(200).json({
          data:updatecaseno
      })
  }
}
