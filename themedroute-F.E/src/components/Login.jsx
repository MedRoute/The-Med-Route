import log from '../log.png';
import '../components/styles/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
// import GetData from './GetData';
import { useEffect, useRef } from 'react';
import Home from './Home';


const Login = () => {


    let navigate = useNavigate();
    let [userDetails, setUserDetails] = useState(null);
    let [error, setError] = useState(null);
    let userNameOrEmail = useRef();
    let password = useRef();



    useEffect(() => {
        if (sessionStorage.getItem("userDetails") != null) {
            let userDetails = sessionStorage.getItem("userDetails")
            userDetails = JSON.parse(userDetails)
            setUserDetails(userDetails)
        }
    }, [])

    let handleLogin = (e) => {
        e.preventDefault();
        setError(null)





        let header = {
            headers: {
                usernameoremail: userNameOrEmail.current.value,
                password: password.current.value
            }
        }
        axios.get(`http://localhost:7071/login`, header)
            .then((response) => {
                let userDetails = response.data; console.log(response.data); alert("Your Login Successful");
                navigate("/get")
                setUserDetails(userDetails)
                let user = JSON.stringify(userDetails)
                sessionStorage.setItem("userDetails", user)
            })
            .catch((response) => { setError(response.response.data); alert("Enter correct values") })


    }
    return (
        <>
<Home/>

            {/* {userDetails===null &&   */}
            <div className="log">
            
                <section className="user-section">
                    <div className='user-form'>
                        <h1>Login</h1><br />
                        <p>if You Are Already A Member Easily Log In</p>
                        <form onSubmit={handleLogin}>
                            <input type="email text" placeholder="Username/Email " ref={userNameOrEmail}  /><br /><br />
                            <input id="pass" type="Password" placeholder="Password" ref={password} /><br /><br />
                            <input type="submit" value="Login"  className='btn'/>
                            {/* <button type='submit' >Login</button> <br /> */}
                        </form>
                        {error !== null && (<h4 className='error'>{error}</h4>)}
                        <div className='gotofp'>
                            <Link to="/forgot"> Forgot password?</Link>
                        </div><br />

                        <div>
                            <span>Don't have an Account ? </span><br />
                            <Link to="/userentity" ><button>Sign Up</button> </Link> <br /><br />
                        </div>


                       
                       
                    </div>


                    <div className="signup-image">
                        <img src={log} alt="" />
                    </div>
                </section>

                {/* {userDetails!==null && <GetData setUserDetails={setUserDetails}></GetData>}} */}
            </div>
        </>
    )

}
export default Login;