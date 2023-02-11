const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Caseno=require('../caseno/caseno.model')


const Others = sequelize.define('Others', {
    othersId: {
        type: DataTypes.INTEGER ,
        autoIncrement: true,
        primaryKey: true
    },
    authorityname: {
        type: DataTypes.STRING 
    },
    officername: {
        type: DataTypes.STRING 
    },
    designation: {
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

// sequelize.sync()
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })
module.exports = Others;