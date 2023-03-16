import { useRef } from "react";
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import log from "../log.png";
import Home from './Home';

const ResetPassword = () => {

    let newpassword = useRef();
    let confirmpassword = useRef();
    let navigate = useNavigate();


    let handleSubmit = (e) => {
        e.preventDefault()
        let Pwd = {
            headers:
            {
                "email": JSON.parse(sessionStorage.getItem("userEmail")),
                "password": newpassword.current.value,
                "confirm": confirmpassword.current.value
            }
        }
   
        if (newpassword.current.value === confirmpassword.current.value) 
        {
            axios.put("http://localhost:7071/resetPwswd",null,Pwd )
                .then((res) => {
                    console.log(res);
                    alert("Password is updated Succesfully....")
                    navigate("/get");

                })
                .catch((error) => { console.error(error) ; 
                 alert("Invalid password. Password must be between 8 to 20 characters long and should contain at least one digit, one lowercase, one uppercase and one special character.") })
        }

        else {
            alert("Password MissMatch")
        }

    }


        
       
       
   
   
        
    return (
        <div className="log">
<Home/>
           
            <section className="user-section">
                <div className="user-form">

                <form onSubmit={handleSubmit} className="resetform">
                    <h1>Reset Your Password </h1>
                    <input type="text" required ref={newpassword} placeholder="Enter New Password" /> <br />
                    <input type="text" required ref={confirmpassword} placeholder="Confirm Password" /> <br />
                    <input type="submit" name="Submit" className="resetcotbtn" />
                </form>
                </div>

                <div className="signup-image">
                    <img src={log} alt="No Design" />
                </div>
            </section>
        </div>
    );
}

export default ResetPassword;

