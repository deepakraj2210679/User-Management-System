import { use, useState } from "react"
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const UpdateTheUser=()=>{

    const {id}=useParams();
    //the above do the fn 
    //const params = useParams();
   // const id = params.id;


    const navigation=useNavigate();//any variabel name can be used
    
    const template={        //the variable name must be as same as the name is the corresponding field
        name:'',
        age:'',
        college:'',
        address:'',
        year:'',
        batch:'',
        email:''
    }
    const [user,setuser]=useState(template);


    const sumbitForm=async()=>{
        //e.preventDefault();
        axios.put(`http://localhost:3000/v1/update/user/${id}`,user)////go to that particular id,upste the detials in user
        
        .then((res)=>{
            console.log(res.data)
            toast.success(res.data.message,{position:'top-right'})
            navigation("/")
        })

        console.log(user);
    }


    //trigred when the changes in the field happens
    const inputHandeler=(a)=>{
        //console.log(a.target.name)
        //console.log(a.target.value)
        const {name,value}=a.target;//destructuring ie. taking the  only name,value for the target
        setuser({...user,[name]:value})
    }


//why the name="name",name="age" etc......  is used to store the corresponding changes corresonding variable
// the id is for thr htmlFor
return(
    <form action={sumbitForm}>
        <fieldset>
            <legend>UPDATE USER</legend>

            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Enter the name" name="name" autoComplete="off" id="name" onChange={inputHandeler} ></input><br></br>
   
            <label htmlFor="age">Age:</label>
            <input type="number" placeholder="Enter the age" name="age" id="age" onChange={inputHandeler}></input><br></br>

            <label htmlFor="college">College:</label>
            <input type="text" placeholder="Enter the college" name="college" id="college" onChange={inputHandeler}></input><br></br>

            <label htmlFor="address">Address:</label>
            <input type="text" placeholder="Enter the address" name="address" id="address" onChange={inputHandeler}></input><br></br>

            <label htmlFor="year">Year:</label>
            <input type="number" placeholder="Enter the year" name="year" id="year" onChange={inputHandeler}></input><br></br>

            <label htmlFor="batch">Batch:</label>
            <input type="number" placeholder="Enter the batch" name="batch" id="batch" onChange={inputHandeler}></input><br></br>

            <label htmlFor="email">Email:</label>
            <input type="text" placeholder="Enter the email" name="email" id="email" onChange={inputHandeler}></input><br></br><br></br>

            <button type="submit">submit</button>
            <button type="reset">reset</button>
        </fieldset>
    </form>

)
}

export {UpdateTheUser}