import axios from "axios";

import { useState,useEffect} from "react";
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";

import { useAuth } from "../auth/authprovider";

const User=()=>{
    const [users,setusers]=useState([])//empty array

    const {logoutAction,user}=useAuth();
    const logoutHandler=()=>{
        console.log("logout successfull")
        logoutAction();
        toast.success("Logout successfully..",{position:'top-right'})
        
    }

    const getuserdetials=async()=>{
        //console.log("the user has got successfully");
        // the axios will get the data and then print the response
        const res=await axios.get("http://localhost:3000/v1/getalluser")
       // console.log(res.data);

        setusers(res.data);
        //also can be printed by
        //await axios.get("http://localhost:3000/v1/getalluser").then(res=>{ console.log(res.data); })
    }

    useEffect(()=>{
        getuserdetials();
    })
    //return is the diplay in the front end page
    //console to print in console page


    var deleteUser=(id)=>{
        axios.delete(`http://localhost:3000/v1/delete/user/${id}`)
        .then((res)=>{
            toast.success(res.data.message,{position:'top-right'})
        })
        
    }
    return(
   
   
    <div className="userTable">
        <h1>welcome {user}</h1>
        <button type='button' onClick={()=>logoutHandler()}>LOGOUT</button>
        <table border={'2'}>
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Age</th>
                <th>College</th>
                <th>Address</th>
                <th>Year</th>
                <th>Batch</th>
                <th>email</th>
                <th colSpan={2}>Options</th>
            </tr>
            {Array.isArray(users) && users.map((x,index)=>{
                return(
                    <tr>
                    <td>{index+1}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.college}</td>
                    <td>{x.address}</td>
                    <td>{x.year}</td>
                    <td>{x.batch}</td>
                    <td>{x.email}</td>
                    <td><button onClick={()=>deleteUser(x._id)} className="bts">delete</button></td>
                   <td>
                        <Link to = {'/update/'+x._id}>
                            <button className="bts">update</button>
                        </Link>
                    </td>
                   
                </tr>
                )
            })}

            
        </table>
        <br></br>
        <Link to ={'/adduser'}>
                 <button className="bts">AddUser</button>
            </Link> 
    </div>
    )

}

export {User}