import React from 'react'
import './SignUp.css'
import {Form,Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

function SignUp() {
  const navigate=useNavigate()
  return (
    <div className='signup-section'>
      <div className="signup-frame">
        <Form.Control type="text" placeholder='Username'/>
        <Form.Control type="text" placeholder='Email'/>
        <Form.Control type="text" placeholder='Password'/>
        <Button onClick={()=>navigate('/login')}>Sign Up</Button>
        <p>Already have an account ? <Link to='/login'>Log In</Link></p>
      </div>
    </div>
  )
}

export default SignUp
