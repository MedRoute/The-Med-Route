import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import log from "../log.png";
import Home from './Home';


const ForgotPassword = () => {

    let navigate = useNavigate();
    let [error, setError] = useState(null);
    let [userEmail, setUserEmail] = useState(null);
    let email = useRef();
    
    useEffect(() => {
        if (sessionStorage.getItem("userEmail") != null) {
            let userEmail = sessionStorage.getItem("userEmail")
            userEmail = JSON.parse(userEmail)
            setUserEmail(userEmail)
        }
    }, [])

    let handleForgot = (e) => {
        e.preventDefault();
        setError(null)

        let header = {
            headers: {
                email: email.current.value,
              
            }
        }
        axios.get(`http://localhost:7071/checkemail`, header)
            .then((response) => {
                let userEmail = response.data; console.log(response.data); alert("Your Email id Correct Click  Ok and Go To Reset Password")
                navigate("/otp")
                setUserEmail(userEmail)
                let user = JSON.stringify(email.current.value)
                sessionStorage.setItem("userEmail", user)
            })
            .catch((response) => { setError(response.response.data); alert(" Please Enter Correct Email Id") })
    }


    return (
        <div className="log">
           <Home/>

            <section className="user-section">

                <div className="user-form">

                    <form onSubmit={handleForgot}>

                        <h1>Forgot Password ?</h1>
                        <p>Enter your email and we'll send you a OTP to reset your Password</p>
                        <input type="email" placeholder="Enter Email" ref={email} /> <br />
                        <input  type="submit" value="Continue" className='btn' /> <br />
                        {/* <Link to="/reset" ><button>Next</button></Link><br /><br /> */}
                        <button><Link to="/userentity"><h4>Back To Sign Up Page </h4></Link></button>
                    </form>

                </div>

                <div className="signup-image">
                    <img src={log} alt="No Design" />
                </div>
            </section>

        </div>

        

    );
}

export default ForgotPassword;
