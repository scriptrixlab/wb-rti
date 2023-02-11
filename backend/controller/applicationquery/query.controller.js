const Query = require("../../model/applicationquery/query.model");
const sequelize = require("../../model/connection")
const { QueryTypes } = require('sequelize');

exports.create=async(req,res)=>{
   
  const fil=req.files.file
  const uploadPath=__dirname+"/file/"+fil.name; 
 const applicantquery = await Query.create({
                 query:req.body.query,
                 document:uploadPath,
                 category:req.body.category,
                 caseno: parseInt(req.body.caseno)
             });
             console.log(uploadPath);
             fil.mv(uploadPath)
             if(!applicantquery){
                 res.status(500).json({
                     msg:"Error"
                 })
             }else{
             return res.status(200).json({
                 msg:"Create successfully",
                 data:applicantquery
             });
             }
         }



         exports.list=async(req,res)=>{
            const list=await sequelize.query("SELECT query, document,category, "+
            "caseno FROM queries;",{
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
        
        exports.fetchquery=async(req,res)=>{
            const fetchquery=await sequelize.query("SELECT query, document,category, "+
            "caseno FROM queries where caseno='"+req.query.caseno+"'",{
                logging:console.log,
                type: QueryTypes.SELECT,
                row:true
            })
            
            if(!fetchquery){
                res.status(500).json({
                                msg:"Error"
                            })
            }else{
                return res.status(200).json({
                    data:fetchquery
                })
            }
          }
          
          exports.updatequery=async(req,res)=>{
            const fil=req.files.file
            const path=__dirname.replace(/[\\]/gi,'/')
            const uploadPath=path+"/file/"+fil.name; 
            console.log(uploadPath);
            fil.mv(uploadPath)
            const updatequery=await sequelize.query("UPDATE queries set query='"+req.body.query+"',"+
            "document='"+uploadPath+"',category='"+req.body.category+"' where caseno='"+req.query.caseno+"'",{
            })
            if(!updatequery){
                res.status(500).json({
                                msg:"Error"
                            })
            }else{
                return res.status(200).json({
                    data:updatequery
                })
            }
          }
          
          exports.deletequery=async(req,res)=>{
            const deletequery=await sequelize.query("DELETE FROM queries where caseno='"+req.query.caseno+"'",{
            })
            
            if(!deletequery){
                res.status(500).json({
                                msg:"Error"
                            })
            }else{
                return res.status(200).json({
                    data:deletequery
                })
            }
          }         
         
         