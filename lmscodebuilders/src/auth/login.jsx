import {useContext, useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from './authprovider.jsx';

const LoginPage=()=>{


const Navigate=useNavigate();
    const [email,setemail]=useState("");
    const[password,setpassword]=useState("");
    //console.log(name);
    //console.log(password)

const {loginAction,name}=useAuth()
console.log(name)

const actionSubmit=(e)=>{
    e.preventDefault()
    const data={
        email,
        password
    }
    loginAction(data);
}

    return(
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-purple-600">
            <div className="border-3 border-white p-7 bg-purple-700 rounded-2xl">
            <h1 className='pb-9 pl-26 text-5xl font-bold text-white'>Login</h1>
            <form onSubmit={actionSubmit} className="flex flex-col">
                <input type='email' placeholder="Email" required onChange={(e)=>setemail(e.target.value)} className="outline-none font-bold text-white border-3 border-fuchsia-400 p-3 ps-5 pe-30  rounded-full hover:border-white "></input>
                <input type='password' placeholder="Password" required onChange={(e)=>setpassword(e.target.value)} className="outline-none font-bold text-white border-3 border-fuchsia-400  p-3 ps-5 pe-30 rounded-full  hover:border-white mt-8 "></input>
                <p className="mt-2 pr-42 text-blue-700 hover:text-white">Forget password?</p>
                <button type='submit' className='p-3 ps-36 pe-36 mt-8 rounded-full bg-white font-bold  hover:bg-blue-700 hover:text-green-300'>Login</button>
            </form >

           
            <p className="mt-2 ml-16 text-white ">Don't have an account? <span className='text-blue-600 font-bold hover:text-white' onClick={()=>Navigate("/register")}>Register</span></p>
            </div>
        </div>
    
)}

export {LoginPage}