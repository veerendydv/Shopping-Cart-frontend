import React from 'react'
import  Navbar  from './Navbar';
import {Routes,Route} from 'react-router-dom'
import UserDashboard from './UserDashboard';
import Footer from './Footer';
import ViewUser from './ViewUser';
const UserHome = () => {
    return (
     <div className='userhome'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<UserDashboard/>}></Route>
        <Route path='/viewuser' element={<ViewUser/>}></Route>
      </Routes>
      <Footer/>

     </div>
    );
  }
  
  export default UserHome;