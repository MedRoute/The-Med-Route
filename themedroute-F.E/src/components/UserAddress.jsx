import { Link } from 'react-router-dom';
import '../components/styles/Login.css';
import log from '../log.png'
import { useRef } from "react";
import Home from './Home';
import { useNavigate } from 'react-router-dom';

function UserAddress() {
    let navigate = useNavigate();

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



    let handleSignup = (e) => {
        e.preventDefault();

        const address = {
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
        fetch("http://localhost:7071/saveAddress",
            { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(address) })

            .then(() => {
                navigate("/")
                alert("Your Address Is Submitted Successfully Click Ok And Go To Home Page")
            })
    }


    return (
        <div className="log">

           <Home/>

            <section className="user-section">
                <div className="user-form">
                    <h1>Fill Your Address</h1>

                    <hr /> <br />
                    <form onSubmit={handleSignup} className="user-address">
                        
                        <input type="text" placeholder="username" required ref={name} /><br />
                        <input type="text" placeholder="age" required ref={age} /><br />
                        <input type="text" placeholder="gender" required ref={gender} /><br />
                        <input type="text" placeholder="phone_no" required ref={phone_no} /><br />
                        <input type="text" placeholder="door_no" required ref={door_no} /><br />
                        <input type="text" placeholder="street" required ref={street} /><br />
                        <input type="text" placeholder="area" required ref={area} /><br />
                        
                        <input type="text" placeholder="district" required ref={district} /><br />
                        <input type="text" placeholder="state" required ref={state} /><br />
                        <input type="text" placeholder="country" required ref={country} /><br />
                        <input type="number" placeholder="pincode" required ref={pincode} /><br />
                        <input type="submit" value="Submit" required className='btn' /> <br />
                        
                    </form>
                    <p>If You Have Any Issue <Link to="/userissue"> Fill It ?</Link> </p>
                    {/* <button> <Link to="/userissue"><h3></h3></Link></button> */}
                    <br />
                </div>


                <div className="signup-image">
                    <img src={log} alt="" />
                </div>
            </section>

        </div>


    )
}
export default UserAddress;
