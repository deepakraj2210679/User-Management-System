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


    return(
        <div>
        <form>
            <fieldset style={{width:'200px'}}>
            <legend><h3>Card Validation</h3></legend>
                <table>
                    <tr>
                        <td> <label>Card holder name</label></td>
                    </tr>
                    <tr>
                        <td><input type='text' placeholder="name" required></input></td>
                    </tr>

                    <tr>
                        <td><label>Card Number</label></td>
                    </tr>
                    <tr>
                        <td colSpan='2'><input type='password' placeholder="Card number" required onChange={(e)=>{setcredit(e.target.value),checkValidCard(e.target.value)}}></input></td>
                    </tr>

                    <tr>
                        <td><label>Expiration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CVV</label></td>
                    </tr>
                    <tr>
                        <td>
                            <input type='number' placeholder="MM" maxLength='2' minLength='2' style={{width:'37px', marginRight: '2px'}} required></input> 
                            <input type='number' placeholder="YYYY" maxLength='4' minLength='4' style={{width:'50px', marginRight: '12px'}} required></input>
                            <input type='password' placeholder="CVV" maxLength='3' minLength='3' style={{width:'60px'}} required></input>
                        </td>
                    </tr>
                   
                    <tr>  <label style={{ fontWeight: '500', color: flag ? "#44ed23" : "red" }}>{errormessage}</label></tr>
                </table>
               
            </fieldset>
        </form>

        

      
        </div>

             
        
    )
}

export {CardValidation}