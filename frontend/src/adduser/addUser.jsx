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


    const sumbitForm = (e) => {
    e.preventDefault(); // stop page refresh

    axios.post("http://localhost:3000/v1/saveuser", user)
      .then((res) => {
        toast.success(res.data.message, { position: 'top-right' });
        navigation("/users"); // after showing toast, navigate
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("Something went wrong!", { position: 'top-right' });
        console.error(err);
      });
};



    //trigred when the changes in the field happens
    const inputHandeler=(a)=>{
        //console.log(a.target.name)
        //console.log(a.target.value)
        const {name,value}=a.target;//destructuring ie. taking the  only name,value for the target
        setuser({...user,[name]:value})
    }


    // return(
    //     <form action={sumbitForm}>
    //         <fieldset >
    //             <legend>ADD USER</legend>
    //             <table>
    //                 <tr>
    //                     <td>
    //                         <label>Name:</label>
    //                     </td>
    //                     <td>
    //                          <input type="text" placeholder="Enter the name" name="name" autoComplete="off" id="name" onChange={inputHandeler} ></input>
    //                     </td>
    //                 </tr>
                    
    //                 <tr>
    //                     <td> 
    //                         <label>Age:</label>
    //                     </td>
    //                     <td>
    //                         <input type="number" placeholder="Enter the age" name="age" id="age" onChange={inputHandeler}></input>
    //                     </td>
    //                 </tr>

    //                 <tr>
    //                     <td>
    //                         <label>College:</label>
    //                     </td>
    //                     <td>
    //                         <input type="text" placeholder="Enter the college" name="college" id="college" onChange={inputHandeler}></input>
    //                     </td>
    //                 </tr>

    //                 <tr>
    //                     <td> 
    //                         <label>Address:</label>
    //                     </td>
    //                     <td>
    //                         <input type="text" placeholder="Enter the address" name="address" id="address" onChange={inputHandeler}></input>
    //                     </td>
    //                 </tr>

    //                 <tr>
    //                     <td>
    //                         <label>Year:</label>
    //                     </td>
    //                     <td>
    //                         <input type="number" placeholder="Enter the year" name="year" id="year" onChange={inputHandeler}></input>
    //                     </td>
    //                 </tr>

    //                 <tr>
    //                     <td>
    //                         <label>Batch:</label>
    //                     </td>
    //                     <td>
    //                         <input type="number" placeholder="Enter the batch" name="batch" id="batch" onChange={inputHandeler}></input>
    //                     </td>
    //                 </tr>

    //                 <tr>
    //                     <td>
    //                         <label>Email:</label>
    //                     </td>
    //                     <td>
    //                         <input type="text" placeholder="Enter the email" name="email" id="email" onChange={inputHandeler}></input>
    //                     </td>
    //                 </tr>

    //                 <tr>
    //                     <td>
    //                         <button type="submit">submit</button>
    //                     </td>
    //                     <td>
    //                         <button type="reset">reset</button>
    //                     </td>
    //                 </tr>

                   
    //             </table>
    
    //         </fieldset>
    //     </form>
    
    // )

    return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
    <form
      onSubmit={sumbitForm}
      className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg"
    >
      <fieldset className="border border-gray-300 rounded-xl p-6">
        <legend className="text-2xl font-bold text-indigo-600 text-center px-2">
          ADD USER
        </legend>

        {/* Name Field */}
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

        {/* Age Field */}
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

        {/* College Field */}
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

        {/* Address Field */}
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

        {/* Year Field */}
        <div className="mb-4">
          <label
            htmlFor="year"
            className="block text-gray-700 font-medium mb-2"
          >
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

        {/* Batch Field */}
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

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter the email"
            name="email"
            id="email"
            onChange={inputHandeler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition duration-200"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-500 transition duration-200"
            onClick={() => setuser(template)}
          >
            Reset
          </button>
        </div>
      </fieldset>
    </form>
  </div>
);

}
    


export {AddnewUser}