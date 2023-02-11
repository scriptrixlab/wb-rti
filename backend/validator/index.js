exports.signupValidator=(req,res,next)=>{
    req.check("name","Name is required").notEmpty();
    req.check("email","Email must between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min:4,
        max:32
    });

    req.check("password","password is required").notEmpty();
    req.check("password")
    .isLength({min:6})
    .withMessage("password must character 6")
    .matches(/\d/)
    .withMessage("password must contain one number")


    const errors=req.validationErrors()
    if(errors){
        const firstError=errors.map(error=>error.msg)[0]
        return res.status(400).json({error:firstError})
    }

    next()

}