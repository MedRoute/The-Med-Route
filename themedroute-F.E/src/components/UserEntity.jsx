import '../components/styles/Login.css';
import log from '../log.png'
import { useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import Home from './Home';


function UserEntity() {

    let user=localStorage.getItem("signup")

    useEffect(()=>{
        localStorage.setItem("signup","{}")
        // console.log(user);
        console.log("HELLO");
    },[])
    let navigate = useNavigate();

    let [entity, setEntity] = useState(true);
    let [useraddress, setUseraddress] = useState(false);
    let [issue, setIssue] = useState(false);
    let[eamil,setEmail]=useState("")
    let username = useRef();
    let email = useRef();
    let password = useRef();
    let phno = useRef();

    let name = useRef();
    let age = useRef();
    let gender = useRef();
    let phone_no = useRef();
    let door_no = useRef();
    let street = useRef();
    let area = useRef();
    let district = useRef();
    let state = useRef();
    let country = useRef();
    let pincode = useRef();


    let thairaid = useRef();
    let covid = useRef();
    let suger = useRef();
    let bp = useRef();
    let children = useRef();
    

    let handleSignup = (e) => {
        e.preventDefault();

        let signup=localStorage.getItem("signup")
        signup=JSON.parse(signup)
        signup.userIssue={
            thairaid: thairaid.current.value,
            covid: covid.current.value,
            suger: suger.current.value,
            bp: bp.current.value,
            children: children.current.value,
        }
        console.log(signup);

        fetch("http://localhost:7071/saveuser",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(signup)
            })


            .then((res) => { return res.json(); })
            .then((data) => {
                navigate("/get")
                alert("Your Signing Process  Is Done Successfully Click Ok And Go To Login Page")
                localStorage.clear()
                return data;
            })
            .catch(() => { alert("email is  already present") })

    }
    let next=(e)=>{
        e.preventDefault();
        setEntity(false); setUseraddress(true)
        let page1=localStorage.getItem("signup");
        page1=JSON.parse(page1);
        
        let signup = { 
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            phno: phno.current.value,}


        localStorage.setItem("signup",JSON.stringify(signup))


    }
    let Continue=(e)=>{
        e.preventDefault();
        setIssue(true); setUseraddress(false)
 
        // console.log("hello");
        let page2=localStorage.getItem("signup")
        page2=JSON.parse(page2)
        page2.userAddress={
            name: name.current.value,
                age: age.current.value,
                gender: gender.current.value,
                phone_no: phone_no.current.value,
                door_no: door_no.current.value,
                street: street.current.value,
                area: area.current.value,
                district: district.current.value,
                state: state.current.value,
                country: country.current.value,
                pincode: pincode.current.value
        }
        localStorage.setItem("signup",JSON.stringify(page2))
        // console.log(page2);
        

    }

    return (
        <div className="log">

            <Home/>
            <section className="user-section">

                <div className="user-form">
                    <h1>Sign Up</h1>

                    <br />
                    <form  onSubmit={handleSignup} className="form"> 

                         {entity == true &&   <><input type="text" placeholder="Enter name" required ref={username} /><sup>*</sup><br /><br />
                            <input type="email" placeholder="Enter eamil"  required ref={email} /><sup>*</sup><br /><br />
                            <input type="text" placeholder="Create password" required ref={password} /><sup>*</sup><br /><br />
                            <input type="text" placeholder="Enter Phone"  ref={phno} /><sup>*</sup><br /><br />

                            {entity == true &&  <> <button onClick={ next} >next</button><br /></>}
                            <h4>If You Are Already A Member ?<Link to="/"> Log In</Link> </h4></>
                            }

                            {useraddress == true && <> <input type="text" placeholder="nickname" ref={name} />
                                <input type="text" placeholder="age" ref={age} /><br /><br />
                                <input type="text" placeholder="gender" ref={gender} />
                                <input type="text" placeholder="alternate Phone"  ref={phone_no} /><br /><br />
                                <input type="text" placeholder="door_no" ref={door_no} />
                                <input type="text" placeholder="street" ref={street} /><br /><br />
                                <input type="text" placeholder="area" ref={area} />
                                <input type="text" placeholder="district" ref={district} /><br /><br />
                                <input type="text" placeholder="state" ref={state} />
                                <input type="text" placeholder="country" ref={country} />
                                <input type="text" placeholder="pincode" ref={pincode} /><br /><br />

                                {useraddress == true && <> <button onClick={Continue}>next</button><br /></>}
                                </>}
                 {issue == true && <>  <input type="text" placeholder="thyroid" ref={thairaid} /><br /><br />
                            <input type="text" placeholder="covid" ref={covid} /><br /><br />
                            <input type="text" placeholder="suger" ref={suger} /><br /><br />
                            <input type="text" placeholder="bp"  ref={bp} /><br /><br />
                            <input type="text" placeholder="others" ref={children} /><br /><br />
                            <input type="submit" value="submit" className='btn'/>
                            {/* <button onClick={handleSignup}>Signup</button> */}
                            </>}
                         </form> 
                        {/* {entity == true &&  <> <button onClick={ next} >next</button><br /></>} */}
                        {/* {useraddress == true && <> <button onClick={Continue}>next</button><br /></>} */}
                </div>


                <div className="signup-image">
                    <img src={log} alt="" />
                </div>

            </section>

        </div>


    )
}
export default UserEntity;
