const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors());
app.listen(3000,()=>{
    console.log("server started at port 3000")
})
app.use(express.json())
const expRoutes=require('./routes/expRoutes')
const userRoutes=require('./routes/userRoutes')
app.use('/api/v1/exp',expRoutes)
app.use('/api/v1/user',userRoutes)
module.exports = app
