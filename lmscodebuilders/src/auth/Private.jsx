import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "./authprovider";//to check use if login or not

const PrivateRoute=()=>{

    const {token}=useAuth()
    console.log("token",token)
    if(!token)
    {
        return <Navigate to="/" />;
    }
    return <Outlet/>
}


export {PrivateRoute}