const User=require("../../model/user/user.model");
const { errorHandler } = require('../../helpers/dbErrorHandler');

exports.userById = async(req, res, next, id) => {
    // User.findByPk(id),(err, user) => {
    //     console.log('hi')
    //     if (err || !user) {
    //         return res.status(400).json({
               
    //             msg: 'User not found'
    //         });
    //     }
    //     req.profile = user;
    //     console.log(user);
    //     next();
    // };

    const user =await User.findByPk(id)
    req.profile=user
    console.log(user)
    next()
    return res.json(user)
};