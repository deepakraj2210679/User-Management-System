import joi from "joi"
import User from "../model/userModule.js"


//Add user data and validate the same email id 
const Create=async(req,res)=>{
   //console.log("hitted")
   //console.log(req.body)
   try {
        //joi validating the data(
        const scheemacheck=joi.object({
            name: joi.string().required(),//if you only define the name the it will thow error ,we need to add age,emial,etc...
            age:joi.number(),
            college:joi.string(),
            address:joi.string(),
            year:joi.number(),
            batch:joi.number(),
            email:joi.string().required()
        })
        const {error,value}=scheemacheck.validate(req.body)
        if(error)
        {
            return res.json({message:"getting the user data error",error:error.message})
        }

        const newUser=new User(req.body)
        //checking same email
        const {email}=newUser//or const emailid=newUser.email(take the email form the current incomming message)
        const userexit=await User.findOne({email})//take the complete user detials form db of the same email if the email is same
        //console.log(userexit)
        if(userexit)
        {
            return res.json({message:"user email id already exist"})//if returned then data will not saved bec it comes out of it 
        }
        //completed checking  and do this for ph.no etc......
        await newUser.save()
        res.json({message:"Data saved successfully......"})//use json or send
    }
    catch(error){
        res.json({message:"getting the user data error",error:error.message})
    }
   
}

//get all user data 
const getAll=async(req,res)=>{
    try{
        const userdata=await User.find()
        if(!userdata || userdata.length==0)
        {
            return res.json({message:"No,User found in the DB"})
        }
        res.send(userdata)
    }
    catch(error){
        res.send({message:"error in getting the data",error:error.message})
    }
}

//find user by id and tell if the user not exist  
const getuserById=async(req,res)=>{
    try{
        console.log(req.params)//to see in the terminal what the id name is passed
        const user_id=req.params.id//to get the id given by the params which was send in request and store it in the user_id
        const userdata=await User.findById(user_id)
        if(!userdata)
        {
            return res.json({message:"User not found in the DB So,unable to update"})
        }
        res.json(userdata) 
    }
    catch(error){
        res.send({message:"get error in the getting the user by id",error:error.message})
    }
}

//find user by id and update user 
const updatauser=async(req,res)=>{
    try{
        const user_id=req.params.id//to get the id given by the params which was send in request and store it in the user_id
        const userdata=await User.findById(user_id)
        if(!userdata)
        {
            return res.json({message:"User not found in the DB So,unable to update"})
        }
        await User.findByIdAndUpdate(user_id,req.body)
        res.json({message:"Data updated successfully"})
    }
    catch(error)
    {
        res.json({message:"Unable to updata",error:error.message})
    }
}

//find by id and delete user 
const deleteuser=async(req,res)=>{
    try{
        const user_id=req.params.id
        const userdata=await User.findById(user_id)
        if(!userdata)
        {
            return res.json({message:"User not found in the DB So,unable to delete"})
        }
        await User.findByIdAndDelete(user_id,req.body)
        res.json({message:"user deleted successfully"})
    }
    catch(error)
    {
        res.json({message:"Unable to delete",error:error.message})
    }
}


export {Create,getAll,getuserById,updatauser,deleteuser}//also use export default Create