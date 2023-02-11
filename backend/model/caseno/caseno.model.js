const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Applicant=require('../DirectApplicant/applicant.model')
const User=require('../user/user.model')


const Caseno = sequelize.define('Caseno', {
    caseno: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique:true,
        allowNull:false

    },
    
    date_of_application: {
        type: DataTypes.DATE  
    },
    date_of_received: {
        type: DataTypes.DATE 
    },
    apply:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Users',
            key:'userId'
        }
    }
    
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});


// User.hasMany(Caseno)
// Caseno.belongsTo(User,{
//     foreignKey:'userId'
// })
// Caseno.hasOne(Applicant)
// Applicant.belongsTo('Caseno',{
//     foreignKey:'caseno'
// })


// sequelize.sync()
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

module.exports = Caseno;