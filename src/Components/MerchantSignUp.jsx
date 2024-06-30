import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import "../styles/merchantsignup.css"
import axios from 'axios';
const MerchantSignUp = () => {

  let [name, setName]=useState("")
  let [phone, setPhone]=useState("")
  let [email, setEmail]=useState("")
  let [gst,setGst]=useState("")
  let [password, setPassword]=useState("")

  let handleSubmit=()=>{
    let payload={name,phone,email,gst,password}
    axios.post("http://localhost:9090/merchants",payload)
    .then(()=>{
      alert("you registered successfully ")
    })
    .catch(()=>{alert("please enter correct data")})
    
  }
  return (
    <div className='merchantsignup'>
      <h1>Merchant SignUp</h1>
      <form id='form' action="">
       <Form>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(a)=>{setName(a.target.value)}} type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control value={phone} onChange={(a)=>{setPhone(a.target.value)}} type="tel" pattern='[789][0-9]{10}' placeholder=" Enter Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(a)=>{setEmail(a.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(a)=>{setPassword(a.target.value)}} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupGst">
        <Form.Label>GST no</Form.Label>
        <Form.Control value={gst} onChange={(a)=>{setGst(a.target.value)}} type="text" placeholder="Enter gstno" />
      </Form.Group>
      <button onClick={handleSubmit} className='btn btn-success px-5'>Register</button>
    </Form>
    </form>
    </div>
  )
}

export default MerchantSignUp
