import auth from "../model/authModule.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
const createAccount=async(req,res)=>{
//username,email,password

const {email,password,name}=req.body

//creating user
try{
    //checking user exit or not
    const userExit=await auth.findOne({email})
    if(userExit)
    {
        return res.json({message:"user already exist "})
    }

    //const user=new auth(req.body)
    //await user.save()  or
    const user=await auth.create(req.body)
    //or
    //const user=await auth.create({email,name,password})

    //creating the auth token for the each user
    const token=jwt.sign({id:user._id},"demo",{expiresIn:'30d'})
    return res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        token:token
    })
}
catch(error)
{
    res.json({message:"error in creating user",error:error.message})
    console.log(error)
}

}

const login=async(req,res)=>{
    //email,password
    const {email,password}=req.body

    try{
        const checkUserExit=await auth.findOne({email})//id email found all the detials of user are stored in the checkUserExit
        if(!checkUserExit)
        {
            return res.json("User not exist!!")
        }

        //const checkPassword=await checkUserExit.matchPassword(password)
        const comp=await bcrypt.compare(password,checkUserExit.password);//if not used the await,it not wait for the comare it will go to the if bec, the compare required some time to compare
        if(!comp)
        {
            return res.json("Password not matched!!")
        }
        //return res.json({message:"Login successful"})
        //creating the auth token for the each user
        const token=jwt.sign({id:checkUserExit._id},"demo",{expiresIn:'30d'})
        return res.json({
            email:checkUserExit.email,
            password:checkUserExit.password,
            token:token
        })
    }
    catch(error)
    {
        res.json({message:"error in login",error:error.message})
        console.log(error)
    }

}

const logout=async(req,res)=>{

//user id
res.json("logout successful")

}


export {createAccount,login,logout}