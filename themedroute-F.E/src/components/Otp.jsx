import { useState } from "react";
import Navbar from "./Navbar";
import log from '../log.png'

function Otp(){

    let [otp,Setotp]=useState();

    let handleOtp= (e) => {
        e.preventDefault();
        
        fetch("http://localhost:7071/verifyEmail")
            .then((result) => {
                result.json().then((resp) => {
                    Setotp(resp)
                    console.log(resp);
                })
            })

        
        }
    return(
       <>
            <Navbar/>
            <div className="otp">
            <h1>Verification</h1>
            <p>You Will get OTP via Email</p><br />
            <input type="text" placeholder="Enter OTP" onClick={handleOtp} /> <br /><br />

            <button>Verify</button><br />
            <div className="otp-resend"> 
            <span>Did't receive the verification OTP?</span>  <a href="">Resend again</a>
            </div>

            <div className="img">
                <img src={log} alt="" />
            </div>
            

            </div>

            </>
    )
}
export default Otp;