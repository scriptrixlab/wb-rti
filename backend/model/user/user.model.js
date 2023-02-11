const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const Caseno = require("../caseno/caseno.model");
const Applicant = require("../DirectApplicant/applicant.model");
const Others=require('../others/others.model');
const Feesdetails = require("../feesdetails/feesdetails.model");
const Query=require('../applicationquery/query.model')

const User = sequelize.define(
  "User",
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    departmentalposition: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// sequelize.sync()
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })
sequelize.authenticate().then(() => {
  User.sync();
  Caseno.sync();
  Applicant.sync();
  Others.sync();
  Feesdetails.sync();
  Query.sync();

  User.hasMany(Caseno);
  Caseno.belongsTo(User, {
    foreignKey: "userId",
  });

  Caseno.hasOne(Applicant,{ foreignKey: "caseno"});
  Applicant.belongsTo(Caseno, {
    foreignKey: "caseno",
  });
 
  Caseno.hasOne(Others,{ foreignKey: "caseno"});
  Caseno.hasOne(Feesdetails,{ foreignKey: "caseno"});
  Caseno.hasOne(Query,{ foreignKey: "caseno"});


 
  Others.belongsTo(Caseno, {
    foreignKey: "caseno",
  });
  Feesdetails.belongsTo(Caseno, {
    foreignKey: "caseno",
  });
  Query.belongsTo(Caseno,
    {
        foreignKey:'caseno'
    })

})
.catch((err) => {
    console.error("Error:::  ", err);
})
module.exports = User;
