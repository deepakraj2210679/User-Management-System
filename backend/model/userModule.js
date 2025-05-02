import mongoose from 'mongoose'
const userSchema= new mongoose.Schema({
    name:{
        type:String,
       // required:true
    },
    age:{
        type:Number
    },
    college:{
        type:String
    },
    address:{
        type:String
    },
    year:{
        type:Number
    },
    batch:{
        type:Number
    },
    email:{
        type:String,
        //unique:true,
       // required:true
    }
})

export default mongoose.model("users",userSchema)