import { useRef } from "react";
import '../components/styles/Login.css';
import log from '../log.png';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

function UserIssue() {

    let navigate = useNavigate();

    let thairaid = useRef();
    let covid = useRef();
    let suger = useRef();
    let bp = useRef();
    let children = useRef();

    let handleSignup = (e) => {
        e.preventDefault();

        const signup = {
            thairaid: thairaid.current.value,
            covid: covid.current.value,
            suger: suger.current.value,
            bp: bp.current.value,
            children: children.current.value
        }
        fetch("http://localhost:7071/saveIssue",
            { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(signup) })

            .then(() => {
                navigate("/")
                alert("Your Issue  Is Submitted Successfully Click Ok And Go To Home Page")
            })
    }

    return (
        <div className="log">

           <Home/>
            <section className="user-section">
                <div className="user-form">
                    <h1>Fill Your Issue</h1>

                    <hr /> <br />
                    <form onSubmit={handleSignup}>

                        <input type="text" placeholder="thairaid" ref={thairaid} /><br /><br />
                        <input type="text" placeholder="covid" ref={covid} /><br /><br />
                        <input type="text" placeholder="suger" ref={suger} /><br /><br />
                        <input type="text" placeholder="bp" required ref={bp} /><br /><br />
                        <input type="text" placeholder="others" ref={children} /><br /><br />


                        <input type="submit" value="Submit" className="btn" /> <br /> <br />


                        {/* <p></p>   <Link to="/">Go to Home Page</Link> */}
                    </form>


                </div>
                <div className="signup-image">
                    <img src={log} alt="" />
                </div>
            </section><br />


        </div>

    )
}
export default UserIssue;
