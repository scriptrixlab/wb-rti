const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Caseno=require('../caseno/caseno.model')


const Feesdetails = sequelize.define('Feesdetails', {
    feesdetailsId: {
        type: DataTypes.INTEGER ,
        autoIncrement: true,
        primaryKey: true
    },
    apply:{
        type:DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING 
    },
    numbers: {
        type: DataTypes.STRING 
    },
    paymentdate: {
        type: DataTypes.STRING 
    },
    nos: {
        type: DataTypes.INTEGER 
    },
    totalamount: {
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

// Feesdetails.hasOne(Caseno)
// Caseno.belongsTo(Feesdetails,{
//     foreignKey:'caseno'
// })

// sequelize.sync()
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })
module.exports = Feesdetails;