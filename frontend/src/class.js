/*import { useEffect, useState } from 'react'
import './App.css'

//functional components---->states,props
//state ---two way binding -- content changes
//props --- single way binding ---content visualise
//rendering state--->happens in the useeffect

//hooks----->
//use state
//use effect
//use memo
//use ref
//use context
//use callback
//custom hooks



function App() {
  const [count, setCount] = useState(0)

  //increment function
  const increment=()=>{
    setCount(count+1);
  }
  //decrement function
  const decrement=()=>{
    setCount(count-1);
  }
  //reset function
  const reset=()=>{
    setCount(0);
  }

  useEffect(()=>{
   setTimeout(increment(),1000)//set timeout--->execute the increment fn after waiting 1sec 
    increment()
  },[count])//first time the use effect is trigred then count=1,since count change rerendring happen then again use effect is called

  return (
    <>
    <h1>Vite + React</h1>
    <p>{count}</p>

    <button onClick={increment}>increase
    </button>

    <button onClick={decrement}>decrease
    </button>

    <button onClick={reset}>clear
    </button>
     
    <p>
      LMS CODE BUILDERS
    </p>

    </>
  )
}

export default App    



import { createContext, useContext,useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const AuthContext=createContext();


const [token,settoken]=useState("");
const [user,setuser]=useState("");

const loginAction=async(data)=>{
    try{
       const res=await axios.post("http://localhost:3000/v1/login",data);
       //console.log(res.data)
       if(res.status==200)
        {
            settoken(res.data.token)
            setuser(res.data)
            localStorage.setItem("authToken",res.data.token)
            console.log(res.data.token)
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

const useAuth=()=>{
    
    return useContext(AuthContext)
}

export {AuthContext,useAuth,loginAction,registerAction}



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Toaster} from "react-hot-toast";


import { AuthContext } from './auth/authprovider.jsx';
import { loginAction } from './auth/authprovider.jsx';
import { registerAction } from './auth/authprovider.jsx';


const name="deepak";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext.Provider value={{loginAction,name,registerAction}}>
       <App />
    </AuthContext.Provider>
    <Toaster/>
  </StrictMode>,
)



*/





