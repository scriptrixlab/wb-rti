const Caseno = require("../../model/caseno/caseno.model");
const Applicant = require("../../model/DirectApplicant/applicant.model");
const Query = require("../../model/applicationquery/query.model");
const Fees = require("../../model/feesdetails/feesdetails.model");
const { Op } = require("sequelize");
const sequelize = require("../../model/connection")
const { QueryTypes } = require('sequelize');

// exports.search = async (req, res) => {
//   try {
//     const { fullname, query, caseno } = req.query;
//     console.log({ caseno, fullname, query });

//     let case_qry = caseno ? { [Op.eq]: parseInt(caseno) } : { [Op.gt]: 0 };

//     console.log(case_qry);

//     const data = await Caseno.findOne({
//       include: [
//         {
//           model: Applicant,
//           attributes: ["fullname"],
//           //   where: {
//           //     [Op.or]: {
//           //       fullname: { [Op.substring]: fullname || "" },
//           //     },
//           //   },
//         },
//         {
//           model: Fees,
//           attributes: ["totalamount"],
//         },
//         {
//           model: Query,
//           attributes: ["query"],
//           //   where: {
//           //     [Op.or]: {
//           //       query: { [Op.substring]: query || "" },
//           //     },
//           //   },
//         },
//       ],
//       attributes: ["caseno", "date_of_application"],

//       // attributes:['caseno', 'date_of_application', 'date_of_received',
//       // 'apply', 'userId',]
//       where: {
//         [Op.or]: {
//           caseno: case_qry,
//         },
//       },
//     });

//     console.log(data);
//     res.status(200).json(data);
//   } catch (error) {
//     console.log("error: ", error);
//     return res.status(500).json({ message: "Fail to create" });
//   }
// };


exports.casesearch=async(req,res)=>{
  const casesearch=await sequelize.query("SELECT a.caseno,a.date_of_application,"+
   "b.fullname,c.query,c.category,a.status from casenos a LEFT JOIN applicants b ON a.caseno=b.caseno "+
    "LEFT JOIN queries c ON a.caseno=c.caseno where a.caseno='"+req.query.caseno+"'",{
      logging:console.log,
      type: QueryTypes.SELECT,
      row:true
  })
  
  if(!casesearch){
      res.status(500).json({
                      msg:"Error"
                  })
  }else{
      return res.status(200).json({
          data:casesearch
      })
  }
}


exports.namesearch=async(req,res)=>{
  const namesearch=await sequelize.query("SELECT a.caseno,a.date_of_application,"+
  "b.fullname,c.query,c.category,a.status from casenos a LEFT JOIN applicants b ON a.caseno=b.caseno "+
   "LEFT JOIN queries c ON a.caseno=c.caseno where b.fullname like '%"+req.query.fullname+"%'",{
      logging:console.log,
      type: QueryTypes.SELECT,
      row:true
  })
  
  if(!namesearch){
      res.status(500).json({
                      msg:"Error"
                  })
  }else{
      return res.status(200).json({
          data:namesearch
      })
  }
}

exports.datesearch=async(req,res)=>{
  const datesearch=await sequelize.query("SELECT a.caseno,a.date_of_application,"+
  "b.fullname,c.query,c.category,a.status from casenos a LEFT JOIN applicants b ON a.caseno=b.caseno "+
   "LEFT JOIN queries c ON a.caseno=c.caseno where a.date_of_application ='"+req.query.dateofapply+"'",{
      logging:console.log,
      type: QueryTypes.SELECT,
      row:true
  })
  
  if(!datesearch){
      res.status(500).json({
                      msg:"Error"
                  })
  }else{
      return res.status(200).json({
          data:datesearch
      })
  }
}

exports.daterangesearch=async(req,res)=>{
  const daterangesearch=await sequelize.query("SELECT a.caseno,a.date_of_application,"+
  "b.fullname,c.query,c.category,a.status from casenos a LEFT JOIN applicants b ON a.caseno=b.caseno "+
   "LEFT JOIN queries c ON a.caseno=c.caseno where a.date_of_application between "+
   "'"+req.query.firstdate+"' and '"+req.query.lastdate+"'",{
      logging:console.log,
      type: QueryTypes.SELECT,
      row:true
  })
  
  if(!daterangesearch){
      res.status(500).json({
                      msg:"Error"
                  })
  }else{
      return res.status(200).json({
          data:daterangesearch
      })
  }
}


exports.categorysearch=async(req,res)=>{
  const categorysearch=await sequelize.query("SELECT a.caseno,a.date_of_application,"+
  "b.fullname,c.query,c.category,a.status from casenos a LEFT JOIN applicants b ON a.caseno=b.caseno "+
   "LEFT JOIN queries c ON a.caseno=c.caseno where c.category like '%"+req.query.category+"%'",{
      logging:console.log,
      type: QueryTypes.SELECT,
      row:true
  })
  
  if(!categorysearch){
      res.status(500).json({
                      msg:"Error"
                  })
  }else{
      return res.status(200).json({
          data:categorysearch
      })
  }
}

exports.querysearch=async(req,res)=>{
  const querysearch=await sequelize.query("SELECT a.caseno,a.date_of_application,"+
  "b.fullname,c.query,c.category,a.status from casenos a LEFT JOIN applicants b ON a.caseno=b.caseno "+
   "LEFT JOIN queries c ON a.caseno=c.caseno where c.query like '%"+req.query.query+"%'",{
      logging:console.log,
      type: QueryTypes.SELECT,
      row:true
  })
  
  if(!querysearch){
      res.status(500).json({
                      msg:"Error"
                  })
  }else{
      return res.status(200).json({
          data:querysearch
      })
  }
}




///////