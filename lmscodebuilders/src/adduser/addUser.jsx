import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";//inste of toast if ypu give any name it  will works


const AddnewUser=()=>{
   
    const navigation=useNavigate();
    const template={
        //the variable name must be as same as the name is the corresponding field
        name:'',
        age:'',
        college:'',
        address:'',
        year:'',
        batch:'',
        email:''
    }

    const [user,setuser]=useState(template);


    const sumbitForm=()=>{
        //e.preventDefault();
        axios.post("http://localhost:3000/v1/saveuser",user)//upste the detials in user
        
        .then((res)=>{
            console.log(res.data)//get the user detials in the console page
            toast.success(res.data.message,{position:'top-right'})//see in the notes why res.data.message
            navigation("/")
        })
        

    }


    //trigred when the changes in the field happens
    const inputHandeler=(a)=>{
        //console.log(a.target.name)
        //console.log(a.target.value)
        const {name,value}=a.target;//destructuring ie. taking the  only name,value for the target
        setuser({...user,[name]:value})
    }


    return(
        <form action={sumbitForm}>
            <fieldset >
                <legend>ADD USER</legend>
                <table>
                    <tr>
                        <td>
                            <label>Name:</label>
                        </td>
                        <td>
                             <input type="text" placeholder="Enter the name" name="name" autoComplete="off" id="name" onChange={inputHandeler} ></input>
                        </td>
                    </tr>
                    
                    <tr>
                        <td> 
                            <label>Age:</label>
                        </td>
                        <td>
                            <input type="number" placeholder="Enter the age" name="age" id="age" onChange={inputHandeler}></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>College:</label>
                        </td>
                        <td>
                            <input type="text" placeholder="Enter the college" name="college" id="college" onChange={inputHandeler}></input>
                        </td>
                    </tr>

                    <tr>
                        <td> 
                            <label>Address:</label>
                        </td>
                        <td>
                            <input type="text" placeholder="Enter the address" name="address" id="address" onChange={inputHandeler}></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Year:</label>
                        </td>
                        <td>
                            <input type="number" placeholder="Enter the year" name="year" id="year" onChange={inputHandeler}></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Batch:</label>
                        </td>
                        <td>
                            <input type="number" placeholder="Enter the batch" name="batch" id="batch" onChange={inputHandeler}></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Email:</label>
                        </td>
                        <td>
                            <input type="text" placeholder="Enter the email" name="email" id="email" onChange={inputHandeler}></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button type="submit">submit</button>
                        </td>
                        <td>
                            <button type="reset">reset</button>
                        </td>
                    </tr>

                   
                </table>
    
            </fieldset>
        </form>
    
    )
}
    


export {AddnewUser}