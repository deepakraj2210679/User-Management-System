import express from 'express'
import mongoose from 'mongoose'
import route from "./routes/userRoutes.js"
import bodyparser from 'body-parser'
import cors from "cors"

mongoose.connect("mongodb://localhost:27017/crud").then(()=>{  //connection string in the mongodb app--->mongodb://localhost:27017
    console.log("Mongodb connected successfully")
})
.catch((error)=>console.log(error))
const app=express();

app.use(bodyparser.json())
app.use(cors())

//to get and send response
app.get("/hi",(req,res)=>{
    res.send("Hello world")
})

//to start the server 
app.listen(3000,()=>{
    console.log("The application is running in the port 3000")
})
app.use("/v1",route);

