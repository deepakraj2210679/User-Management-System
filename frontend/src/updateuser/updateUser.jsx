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


    const sumbitForm=async(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/v1/update/user/${id}`,user)////go to that particular id,upste the detials in user
        
        .then((res)=>{
            console.log(res.data)
            toast.success(res.data.message,{position:'top-right'})
            navigation("/users")
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
// return(
//     <form action={sumbitForm}>
//         <fieldset>
//             <legend>UPDATE USER</legend>

//             <label htmlFor="name">Name:</label>
//             <input type="text" placeholder="Enter the name" name="name" autoComplete="off" id="name" onChange={inputHandeler} ></input><br></br>
   
//             <label htmlFor="age">Age:</label>
//             <input type="number" placeholder="Enter the age" name="age" id="age" onChange={inputHandeler}></input><br></br>

//             <label htmlFor="college">College:</label>
//             <input type="text" placeholder="Enter the college" name="college" id="college" onChange={inputHandeler}></input><br></br>

//             <label htmlFor="address">Address:</label>
//             <input type="text" placeholder="Enter the address" name="address" id="address" onChange={inputHandeler}></input><br></br>

//             <label htmlFor="year">Year:</label>
//             <input type="number" placeholder="Enter the year" name="year" id="year" onChange={inputHandeler}></input><br></br>

//             <label htmlFor="batch">Batch:</label>
//             <input type="number" placeholder="Enter the batch" name="batch" id="batch" onChange={inputHandeler}></input><br></br>

//             <label htmlFor="email">Email:</label>
//             <input type="text" placeholder="Enter the email" name="email" id="email" onChange={inputHandeler}></input><br></br><br></br>

//             <button type="submit">submit</button>
//             <button type="reset">reset</button>
//         </fieldset>
//     </form>

// )

return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
    <form
      onSubmit={sumbitForm}
      className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg"
    >
      <fieldset>
        <legend className="text-2xl font-bold text-indigo-600 text-center mb-6">
          UPDATE USER
        </legend>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter the name"
            name="name"
            autoComplete="off"
            id="name"
            onChange={inputHandeler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            Age:
          </label>
          <input
            type="number"
            placeholder="Enter the age"
            name="age"
            id="age"
            onChange={inputHandeler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* College */}
        <div className="mb-4">
          <label
            htmlFor="college"
            className="block text-gray-700 font-medium mb-2"
          >
            College:
          </label>
          <input
            type="text"
            placeholder="Enter the college"
            name="college"
            id="college"
            onChange={inputHandeler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-medium mb-2"
          >
            Address:
          </label>
          <input
            type="text"
            placeholder="Enter the address"
            name="address"
            id="address"
            onChange={inputHandeler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Year */}
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 font-medium mb-2">
            Year:
          </label>
          <input
            type="number"
            placeholder="Enter the year"
            name="year"
            id="year"
            onChange={inputHandeler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Batch */}
        <div className="mb-4">
          <label
            htmlFor="batch"
            className="block text-gray-700 font-medium mb-2"
          >
            Batch:
          </label>
          <input
            type="number"
            placeholder="Enter the batch"
            name="batch"
            id="batch"
            onChange={inputHandeler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email:
          </label>
          <input
            type="text"
            placeholder="Enter the email"
            name="email"
            id="email"
            onChange={inputHandeler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition duration-200"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-500 transition duration-200"
          >
            Reset
          </button>
        </div>
      </fieldset>
    </form>
  </div>
);

}

export {UpdateTheUser}