const { errorHandler } = require("../../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken"); //to genterted signin
var { expressjwt: expressJwt } = require("express-jwt");
const bcrypt = require("bcrypt");
const User = require("../../model/user/user.model");

exports.sayHi = (req, res) => {
  res.json({
    msg: "RTI api application",
  });
};

// exports.signup = async (req, res) => {
//   const isExit = await User.findOne({
//     where: {
//       email: req.body.email,
//     },
//   });
//   if (isExit) {
//     return res.status(400).json({
//       msg: "Email id already exit",
//     });
//   }

//   const hashedPassword = await bcrypt.hash(req.body.password, 10);

//   const user = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: hashedPassword,
//   });
//   return res.json(user);
// };
exports.adduser=async(req,res)=>{
  console.log(req.body);
  try {
      const users=await  User.create({
          name:req.body.name,
          email:req.body.email,
          Departmentalname:req.body.dname,
          role:req.body.role,
          password:req.body.password,   
      })
      const password = req.body.password
      const cpassword = req.body.cpassword
      if(password==cpassword){
        return  res.json(users);
      }
      
      
  } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Fail to create user" });
      
  }
}
exports.signin = async (req, res) => {
  //find the user base email
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  
  if (!user) {
    return res.status(400).json({
      error: true,
      msg: "User with this email does not exit ! please Sigin UP",
    });
  }
  //if the user is fond make sure email and password match
  //create authenticate method in user model
  // if(!user.authenticate(email)){
  //     return res.status(401).json({
  //         msg:"Email and Password not match"
  //     })

  // }
  //generated signed token with user id and secret
  const { userId, name, role, email } = user;
  const token = jwt.sign(
    {
      user: {
        userId,
        name,
        role,
        email,
      },
    },
    process.env.JWT_SECRET
  );
  // console.log({ user });
  //persist the token as 't' in cookie and expire date
  res.cookie("auth-token", token, { expire: new Date() + 9999 });
  //return response with user and token to the front client

  return res.status(200).json({ token, user: { userId, name, role, email } });
};

exports.signout = (req, res) => {
  res.clearCookie("auth-token");
  res.json({ message: "Sign Out success" });
};

exports.requireSignin = expressJwt({
  secret: "rtionlineapplication",
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.profile = (arg, req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  return res.json({
    user: arg.user,
  });
};
exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied",  
    });
  }
  next();
};

exports.isAdmin = async (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      msg: "Admin resourse! Access denied",
    });
  }
  next();
};
