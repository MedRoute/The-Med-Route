import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '../components/styles/SignupStyle.css';


function Signup() {


    
    let userName = useRef();
    let emailId = useRef();
    let passWord = useRef();
    let age = useRef();
    let address = useRef();
    let phoneNo = useRef();



    let handleSignup = (e) => {
        e.preventDefault();

        const signup = {
            userName: userName.current.value,
            emailId: emailId.current.value,
            password: passWord.current.value,
            age: age.current.value,
            address: address.current.value,
            phoneNo: phoneNo.current.value



        }
        fetch("http://localhost:7071/save",
            { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(signup) })

            .then(() => {

            })
    }

    return (
        <div>

            <div className="signuppage">

                <div className="signup-data">
                    <h1>Fill Your Details</h1>
                    <hr /> <br />
                    <form onSubmit={handleSignup}>
                        <div className="all-data">
                            <br />
                        
                            <input type="text" placeholder="Username" ref={userName} /><br />
                            <input type="email" placeholder="Email" required ref={emailId} /><br />
                            <input type="text" placeholder="Password" ref={passWord} /><br />
                            <input type="number" placeholder="Age" required ref={age} /><br />
                            <input type="text" placeholder="Address" ref={address} /><br />
                            <input type="text" placeholder="PhoneNo" ref={phoneNo} /><br />
                            <label>Select Gender</label> <br />
                            <label for="m">Male</label><input type="radio" name="gender" id="m" />
                            <label for="f">Female</label><input type="radio" name="gender" id="f" />
                            <br />
                            <input type="submit" value="Signup" className='btn' />


                        </div>


                    </form>
                </div>


            </div>

            <Link to="/get">Show  Details</Link>
        </div>
    )
}
export default Signup;