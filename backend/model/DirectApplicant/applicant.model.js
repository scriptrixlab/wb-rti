const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Caseno=require('../caseno/caseno.model')



const Applicant = sequelize.define('Applicant', {
    applicantId: {
        type: DataTypes.INTEGER ,
        autoIncrement: true,
        primaryKey: true,
        unique:true
    },
    fullname: {
        type: DataTypes.STRING 
    },
    gender: {
        type: DataTypes.STRING 
    },
    address: {
        type: DataTypes.STRING 
    },
    postoffice: {
        type: DataTypes.STRING 
    },
    policestation: {
        type: DataTypes.STRING 
    },
    district: {
        type: DataTypes.STRING 
    },
    pincode: {
        type: DataTypes.INTEGER 
    },
    state: {
        type: DataTypes.STRING 
    },
    emailid: {
        type: DataTypes.STRING 
    },
    teleno: {
        type: DataTypes.STRING 
    },
    mobno: {
        type: DataTypes.STRING 
    }, 
    caseno: {
        type: DataTypes.INTEGER,
        unique:true,
        references:{
          model:'Casenos',
          key:"caseno"
        }
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}); 

//Caseno.hasOne(Applicant,{foreignKey:'caseno'})
// Applicant.belongsTo(Caseno,{foreign/Key:'caseno'})
// Applicant.hasOne(Feesdetails)
// Feesdetails.belongsTo('Applicant',{
//     foreignKey:'caseno'
// })


// sequelize.sync()
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })
module.exports = Applicant;