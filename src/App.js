import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import UserLogin from './Components/UserLogin';
import MerchantLogin from './Components/MerchantLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantSignUp from './Components/MerchantSignUp';
import MerchantHomepage from './Components/MerchantHomepage';
import UserSignUp from './Components/UserSignUp';
import UserHome from './Components/UserHome';
import Error from './Components/Error';
import UserForgotPassword from './Components/UserForgotPassword';
import MerchantForgotPassword from './Components/MerchantForgotPassword';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          
         <Routes>
           <Route path="/" element={<LandingPage/>}></Route>
           <Route path="/userlogin" element={<UserLogin/>}></Route>
           <Route path="/merchantlogin" element={<MerchantLogin/>}></Route>
           <Route path="/merchantsignup" element={<MerchantSignUp/>}></Route>
           <Route path="/merchanthome" element={<MerchantHomepage/>}></Route>
           <Route path="/usersignup" element={<UserSignUp/>}></Route>
           <Route path="/userhome" element={<UserHome/>}></Route>
           <Route path="/usersetpassword" element={<UserForgotPassword/>}></Route>
           <Route path="/merchantsetpassword" element={<MerchantForgotPassword/>}></Route>
           <Route path='*' element={<Error/>}></Route>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
