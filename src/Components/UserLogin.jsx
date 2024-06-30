import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "../styles/userlogin.css"
import { Link, useNavigate } from 'react-router-dom';
const UserLogin = () => {
  let [uname, setUname] = useState("")
  let [pwd, setPwd]= useState("")

  let navigate=useNavigate()

  let handleSubmit=()=>{
    if(uname =="admin" && pwd==1234){
    navigate("/userhome")
    }
    else{
      alert("data is invalid")
    }
  }
  return (
    <div className='userlogin'>
     <div className='input_group'>
      <h2>User login here</h2>
      <form action=''>
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={uname} onChange={(a)=>{setUname(a.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pwd} onChange={(b)=>{setPwd(b.target.value)}} type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    <div> <button onClick={handleSubmit} className='btn btn-outline-primary'>Sign in</button>
     <button className='btn btn-secondary'><Link to="/usersignup"> Sing Up  </Link></button></div>
     <Link to="/usersetpassword">Forgot password</Link>

      </form>
     </div>
    </div>
  )
}

export default UserLogin
