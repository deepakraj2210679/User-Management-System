import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from './authprovider.jsx';

const RegisterPage=()=>{
    const Navigate=useNavigate();
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const[password,setpassword]=useState("");

    const {registerAction}=useAuth()

    const SubmitHandeler=(e)=>{
        e.preventDefault()
        //console.log("Name:",username)
        //console.log("email:",email)
        //console.log("password:",password)
        const data={
            email,
            password,
            name
        }
        registerAction(data);
        
    }


    return(
        
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-purple-600">
            <div className="border-3 border-white p-7 bg-purple-700 rounded-2xl">
            <h1 className='pb-9 pl-26 text-5xl font-bold text-white'>Signup</h1>
            <form onSubmit={SubmitHandeler} className="flex flex-col">
                <input type='text' placeholder="Username"  required onChange={(e)=>setname(e.target.value)} className="outline-none font-bold text-white border-3 border-fuchsia-400 p-3 ps-5 pe-30  rounded-full hover:border-white"></input>
                <input type='email' placeholder="Email" required onChange={(e)=>setemail(e.target.value)}  className="outline-none font-bold text-white border-3 border-fuchsia-400 p-3 ps-5 pe-30  rounded-full hover:border-white mt-7"></input>
                <input type='password' placeholder="Password" required onChange={(e)=>setpassword(e.target.value)} className="outline-none font-bold text-white border-3 border-fuchsia-400  p-3 ps-5 pe-30 rounded-full  hover:border-white mt-7 "></input>
                <button type='submit' className='p-3 ps-36 pe-36 mt-15 rounded-full bg-white font-bold  hover:bg-blue-700 hover:text-green-300' >Register</button>
            </form>

            
            <p className="mt-2 ml-16 text-white ">Already have an account? <span className='text-blue-600 font-bold hover:text-white' onClick={()=>Navigate("/login")}>Login</span></p>
            </div>
        </div>
    )
}

export {RegisterPage}