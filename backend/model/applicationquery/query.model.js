const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Caseno=require('../caseno/caseno.model')


const Query = sequelize.define('Query', {
    queryId: {
        type: DataTypes.INTEGER ,
        autoIncrement: true,
        primaryKey: true,
    },
    query: {
        type: DataTypes.STRING(5000)
    },
    document: {
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
// Query.hasOne(Caseno)
// Caseno.belongsTo(Query,{
//     foreignKey:'caseno'
// })

// sequelize.sync()
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })
module.exports = Query;