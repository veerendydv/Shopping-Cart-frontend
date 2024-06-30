import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import "../styles/usersignup.css"
const UserSignUp = () => {

  let [name, setName]=useState("")
  let [phone, setPhone]=useState("")
  let [email, setEmail]=useState("")
  let [gender,setGender]=useState("")
  let [password, setPassword]=useState("")
  return (
    <div className='usersignup'>
      <h1>User SignUp</h1>
      <form id='form' action="">
       <Form>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(a)=>{setName(a.target.value)}} type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control value={phone} onChange={(a)=>{setPhone(a.target.value)}} type="tel" pattern='[789][0-9]{10}' placeholder=" enter Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(a)=>{setEmail(a.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(a)=>{setPassword(a.target.value)}} type="password" placeholder="enter Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupGst">
        <Form.Label>Gender</Form.Label>
        <Form.Control value={gender} onChange={(a)=>{setGender(a.target.value)}} type="text" placeholder="Enter gender" />
      </Form.Group>
      <button className='btn btn-success px-5'>Register</button>
    </Form>
    </form>
    </div>
  )
}

export default UserSignUp
