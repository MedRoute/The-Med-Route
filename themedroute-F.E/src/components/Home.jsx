import Logos from '../Logos.png';
import { Link, Navigate } from "react-router-dom";
import Login from './Login';
import { useNavigate } from 'react-router-dom';

// import LoginUser from './LoginUser';
// import UserEntity from './UserEntity';
// import UserAddress from './UserAddress';
// import UserIssue from './UserIssue';
// import GetData from './GetData';
// import ForgotPassword from './ForgotPassword ';
// import ResetPassword from './ResetPassword ';
// import Signup from './Signup';


const Home = ({ setUserDetails }) => {
    let navigate = useNavigate();
     
    let handleLogout = (e) => {
        e.preventDefault();

        setUserDetails(navigate("/search"))
       
        sessionStorage.clear();
        

    }
    return (
        <div>
            <nav className='home'>
                <div className="logo">
                    <img src={Logos} alt="logo" />
                    <div>
                        <h1>The Med Route</h1>
                        <h5>CARING BEYOND DRUGS</h5>
                    </div>
                </div>

            <form onSubmit={handleLogout}>
                <div className="searchbar">
                    <input type="search" placeholder='Search Here' />
                  <input type="Submit" value="Search" className='search'/>
                </div>
                </form>
            </nav>
           

          
            <br />
            
            
           
        </div>
    )
}
export default Home;