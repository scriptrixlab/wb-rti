const express=require("express");
const morgan=require("morgan");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const expressValidator=require('express-validator')
const fileUpload = require("express-fileupload")

const cors=require("cors")

require("dotenv").config();

//user router
const authRouter=require('./routes/user/auth.routes')
const userRouter=require('./routes/user/user.routes')
const casenoRouter=require('./routes/caseno/caseno.routes')
const applicantRouter=require('./routes/DirectApplicant/applicant.routes')
const othersRouter=require('./routes/others/others.routes')
const feesdetailsRouter=require('./routes/feesdetails/feesdetails.routes')
const queryRouter=require('./routes/applicationquery/query.routes')
const searchRouter=require('./routes/search/search.routes')


//app
const app=express();


//middleware

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
        createParentPath: true
    }))
app.use(cookieParser());
app.use(expressValidator());
app.use(cors())

//static Images Folder

app.use('/Images', express.static('.Images'))




//use router

app.use('/api',authRouter)
app.use('/api',userRouter)
app.use('/api',casenoRouter)
app.use('/api',applicantRouter)
app.use('/api',othersRouter)
app.use('/api',feesdetailsRouter)


app.use('/api',queryRouter)
app.use('/api',searchRouter)



const port=process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})