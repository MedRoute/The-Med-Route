import { Link } from "react-router-dom";

function Notfound() {
    return (
        <div>
            <h1>404 : Page not found</h1><br />

            <button> <h3>  <Link to="/userentity">Go to Signup page</Link></h3>      </button><br /><br />
            <button> <h3>     <Link to="/useraddress">Fill Your Address</Link></h3>  </button> <br /><br />
            <button> <h3>     <Link to="/userissue">Fill Your Issue</Link></h3>     </button><br /><br />
            <button> <h3>  <Link to="/login">Go to Login Page</Link></h3>         </button>  <br /><br />
            <button> <h3>    <Link to="/">Go to Home Page</Link></h3>              </button>  <br />


        </div>
    )
}
export default Notfound;