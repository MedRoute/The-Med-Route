
import { Route } from 'react-router-dom';
import { BrowserRouter ,Routes} from 'react-router-dom';
import './App.css';
import GetData from './components/GetData';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import UserEntity from './components/UserEntity';
import UserAddress from './components/UserAddress';
import UserIssue from './components/UserIssue';
import Notfound from './components/Notfound';
import ForgotPassword from './components/ForgotPassword ';
import ResetPassword from './components/ResetPassword ';
import DoctorLogin from './Dcomponents/DoctorLogin';
import DoctorSignup from './Dcomponents/DoctorSignup';
import GetDoctorData from './Dcomponents/GetDoctorData';
import Navbar from './components/Navbar';
import Otp from './components/Otp';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
      <div className="App">
        <Routes>

          <Route path='/' element={<Home/>} /> 
          <Route path="/singup" element={<Signup/>}/>
          <Route  path="/get" element={<GetData/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route  path="/forgot" element={<ForgotPassword/>}></Route>
          <Route path='/reset' element={<ResetPassword/>}></Route>
          

          
           <Route path="/userentity" element={<UserEntity/>}/>
           <Route  path="/useraddress" element={<UserAddress/>}></Route>
           <Route path='/userissue' element={<UserIssue/>}></Route>

          
           <Route path='/doctorlogin' element={<DoctorLogin/>}></Route>

           <Route path='/doctorsignup' element={<DoctorSignup/>}></Route>
           <Route path='/getDoctor' element={<GetDoctorData/>}></Route>

           <Route path='/otp' element={<Otp/>}></Route>

      


           <Route path='*' element={<Notfound/>}> </Route>

           <Route path='/navbar' element={<Navbar/>}></Route>

        </Routes>
       
        
      </div>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
