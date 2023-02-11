const jwt = require("jsonwebtoken")


exports.isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies?.["auth-token"]
        if (!token) throw new Error("error")

        const decode = jwt.decode(token)
        console.log(decode);

        if (!decode.user) throw new Error("Err")

        const verify = jwt.verify(token, process.env.JWT_SECRET)

        if (!verify) throw new Error("err")

        next(decode)

    } catch (err)   {
        return res.status(401).json({message: "Auth fail"})
    }
}