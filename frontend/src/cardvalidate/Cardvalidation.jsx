import { useState } from "react"
import validator from "validator"

const CardValidation=()=>{
    let [credit,setcredit]=useState("");
    let [errormessage,seterrormessage]=useState('');
    let [flag,setflag]=useState("");

    const checkValidCard=(cardNumber)=>{
        if(validator.isCreditCard(cardNumber))
        {
            seterrormessage("Valid Card Number");
            setflag(true);
        }
        else if(cardNumber.length==0)
        {
            seterrormessage("");
        }
        else
        {
            seterrormessage("Invalid Card Number");
            setflag(false);
        }
    };


    // return(
    //     <div>
    //     <form>
    //         <fieldset style={{width:'200px'}}>
    //         <legend><h3>Card Validation</h3></legend>
    //             <table>
    //                 <tr>
    //                     <td> <label>Card holder name</label></td>
    //                 </tr>
    //                 <tr>
    //                     <td><input type='text' placeholder="name" required></input></td>
    //                 </tr>

    //                 <tr>
    //                     <td><label>Card Number</label></td>
    //                 </tr>
    //                 <tr>
    //                     <td colSpan='2'><input type='password' placeholder="Card number" required onChange={(e)=>{setcredit(e.target.value),checkValidCard(e.target.value)}}></input></td>
    //                 </tr>

    //                 <tr>
    //                     <td><label>Expiration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CVV</label></td>
    //                 </tr>
    //                 <tr>
    //                     <td>
    //                         <input type='number' placeholder="MM" maxLength='2' minLength='2' style={{width:'37px', marginRight: '2px'}} required></input> 
    //                         <input type='number' placeholder="YYYY" maxLength='4' minLength='4' style={{width:'50px', marginRight: '12px'}} required></input>
    //                         <input type='password' placeholder="CVV" maxLength='3' minLength='3' style={{width:'60px'}} required></input>
    //                     </td>
    //                 </tr>
                   
    //                 <tr>  <label style={{ fontWeight: '500', color: flag ? "#44ed23" : "red" }}>{errormessage}</label></tr>
    //             </table>
               
    //         </fieldset>
    //     </form>

        

      
    //     </div>

             
        
    // )

    return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form className="bg-white p-6 rounded-2xl shadow-lg w-96">
      <fieldset>
        <legend className="text-2xl font-semibold mb-4 text-gray-700 text-center">
          Card Validation
        </legend>

        {/* Card Holder Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Card Holder Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            required
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Card Number
          </label>
          <input
            type="password"
            placeholder="•••• •••• •••• ••••"
            required
            onChange={(e) => {
              setcredit(e.target.value);
              checkValidCard(e.target.value);
            }}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Expiration + CVV */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Expiration Date & CVV
          </label>
          <div className="flex mt-1 space-x-2">
            <input
              type="number"
              placeholder="MM"
              maxLength="2"
              minLength="2"
              required
              className="w-16 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="number"
              placeholder="YYYY"
              maxLength="4"
              minLength="4"
              required
              className="w-24 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="CVV"
              maxLength="3"
              minLength="3"
              required
              className="w-20 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Error or Success Message */}
        <p
          className={`text-sm font-medium mt-2 ${
            flag ? "text-green-500" : "text-red-500"
          }`}
        >
          {errormessage}
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Validate Card
        </button>
      </fieldset>
    </form>
  </div>
);

}

export {CardValidation}