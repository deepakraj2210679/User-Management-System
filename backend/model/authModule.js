import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const authSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        
    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        default: "user"
    }
})


//pre is the inbuilt method in the schema
authSchema.pre('save',async function(next){//here we using the regular fn not using arow fn bec this will not work i arror fn
    if(this.isModified('password'))//next the  process start fron save(not only next use any word ) 
    {
        const salt=await bcrypt.genSalt(10)//generate salt
        this.password=await bcrypt.hash(this.password,salt)
    }
    next()
})


//for login decoding the password and checking it and returning the result
//matchPassword is custom method created by us in schema

/*authSchema.methods.matchPassword=async function(entredPassword){
    return await bcrypt.compare(entredPassword,this.password)
}*/

export default mongoose.model("auths",authSchema)//auth is the subfolder created in the mongodb