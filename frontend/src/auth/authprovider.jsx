import { Children, createContext, useContext,useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom"
const AuthContext=createContext();


const AuthProvider=({children})=>{

    const navigate=useNavigate()
    const [token,settoken]=useState(localStorage.getItem("authToken")  || null);//if there is no any data in the local storage the token ste to null
    const [user,setuser]=useState(null);

    const name="deepak";
    const loginAction=async(data)=>{
        try{
            const res=await axios.post("http://localhost:3000/v1/login",data);
            //console.log(res.data)
            if(res.status==200)
            {
                console.log(res.data)
                settoken(res.data.token)
                setuser(res.data.name)
                localStorage.setItem("authToken",res.data.token)
                navigate('/users')

            }
        }
        catch(error)
        {
            console.log("error",error)
        } 
    }

    const registerAction=async(Rdata)=>{
        try{
            const res=await axios.post("http://localhost:3000/v1/createAccount",Rdata)
            if(res.status==200)
            {
                console.log(res.data.token)
            }
            console.log(res.data);
        }
        catch(error)
        {
            console.log("error:",error)
        }
    }

    const logoutAction = async (data) => {
        try {
            settoken(null);
            setuser(null);
            localStorage.removeItem("authToken"); // Correct key
            navigate('/');
        } catch (error) {
            console.log("error:", error);
        }
    };
    

    return <AuthContext.Provider value={{loginAction,name,registerAction,token,user,logoutAction}}>{children}</AuthContext.Provider>

     
}
const useAuth=()=>{
    
    return useContext(AuthContext)
}

export {useAuth,AuthProvider}