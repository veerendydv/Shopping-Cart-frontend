import axios from 'axios'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import "../styles/merchantpassword.css"

const MerchantForgotPassword = () => {
    let [email, setEmail]=useState("")
    let handlesubmit=()=>{
        axios.post('http://localhost:9090/merchants/verify')
        .then(()=>{alert(`OTP has been send to your ${email}`)})
        .catch(()=>{alert("please enter the right email")})
    }
  return (
    
    <div className='merchantforgotpassword'>
        <div className='input_group2'>
        <form action=''>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(a)=>{setEmail(a.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      
    </Form>
     <button onClick={handlesubmit} className='btn btn-outline-danger'>Submit</button>
    
        </form>
        </div>
      
    </div>
  );
}

export default MerchantForgotPassword
