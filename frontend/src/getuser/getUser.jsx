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
    // return(
   
   
    // <div className="userTable">
    //     <h1>welcome {user}</h1>
    //     <button type='button' onClick={()=>logoutHandler()}>LOGOUT</button>
    //     <table border={'2'}>
    //         <tr>
    //             <th>S.NO</th>
    //             <th>Name</th>
    //             <th>Age</th>
    //             <th>College</th>
    //             <th>Address</th>
    //             <th>Year</th>
    //             <th>Batch</th>
    //             <th>email</th>
    //             <th colSpan={2}>Options</th>
    //         </tr>
    //         {Array.isArray(users) && users.map((x,index)=>{
    //             return(
    //                 <tr>
    //                 <td>{index+1}</td>
    //                 <td>{x.name}</td>
    //                 <td>{x.age}</td>
    //                 <td>{x.college}</td>
    //                 <td>{x.address}</td>
    //                 <td>{x.year}</td>
    //                 <td>{x.batch}</td>
    //                 <td>{x.email}</td>
    //                 <td><button onClick={()=>deleteUser(x._id)} className="bts">delete</button></td>
    //                <td>
    //                     <Link to = {'/update/'+x._id}>
    //                         <button className="bts">update</button>
    //                     </Link>
    //                 </td>
                   
    //             </tr>
    //             )
    //         })}

            
    //     </table>
    //     <br></br>
    //     <Link to ={'/adduser'}>
    //              <button className="bts">AddUser</button>
    //         </Link> 
    // </div>
    // )

    return (
  <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
    <h1 className="text-2xl font-bold text-indigo-700 mb-6">
      Welcome {user}
    </h1>

    {/* Logout Button */}
    <button
      type="button"
      onClick={() => logoutHandler()}
      className="mb-6 ml-280 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition duration-200"
    >
      LOGOUT
    </button>

    {/* User Table */}
    <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
      <table className="w-full border-collapse">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-4 py-2 border">S.NO</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Age</th>
            <th className="px-4 py-2 border">College</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Year</th>
            <th className="px-4 py-2 border">Batch</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border" colSpan={2}>
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) &&
            users.map((x, index) => {
              return (
                <tr
                  key={x._id}
                  className="odd:bg-gray-50 even:bg-gray-100 hover:bg-indigo-50 transition"
                >
                  <td className="px-4 py-2 border  text-center">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border">{x.name}</td>
                  <td className="px-4 py-2 border">{x.age}</td>
                  <td className="px-4 py-2 border">{x.college}</td>
                  <td className="px-4 py-2 border">{x.address}</td>
                  <td className="px-4 py-2 border">{x.year}</td>
                  <td className="px-4 py-2 border">{x.batch}</td>
                  <td className="px-4 py-2 border">{x.email}</td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => deleteUser(x._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <Link to={"/update/" + x._id}>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow">
                        Update
                      </button>
                    </Link>
                    
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>

    {/* Add User Button */}
    <div className="mt-6">
      <Link to={"/adduser"}>
        <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow transition duration-200">
          Add User
        </button>
      </Link>
      <Link to={"/validatecard"}>
                      <button className="bg-green-500 ml-270 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow transition duration-200">
                        Card Validate
                      </button>
    </Link>
      
    </div>
  </div>
);


}

export {User}