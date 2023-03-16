import React from 'react';
import {MDBContainer,MDBInput,MDBCheckbox,MDBBtn,MDBIcon} from 'react';
import log from '../log.png'
function DoctorLogin(){

    return(
        <div className='logo'>
    
   


  
    <form  className="d-signup-form">
    <div className='d-signup'>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>
      <label ><b>Name</b></label><br />
      <input type="text" placeholder="Enter Name"  required/><br />
      <label ><b>Email</b></label><br />
      <input type="text" placeholder="Enter Email"  required/><br />
      <label ><b>Phone</b></label><br />
      <input type="password" placeholder="Enter Phone" required/><br />
      <label ><b>Password</b></label><br />
      <input type="password" placeholder="Enter Password"  required/><br />

      
      <label>
        <input type="checkbox" checked="checked" nameName="remember" /> Remember me
      </label>
<br />
      

      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>

 
 




      </div>
      
    
       
    )
}
export default DoctorLogin;