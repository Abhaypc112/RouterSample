import React from 'react'
import './Login.css'
import {Form,Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

function Login() {
  const navigate=useNavigate()
  return (
    <div className='login-section'>
      <div className="login-frame">
        <Form.Control type="text" placeholder='Username'/>
        <Form.Control type="text" placeholder='Password'/>
        <Button onClick={()=>navigate('/home')}>Login</Button>
        <p>Create an account ? <Link to='/'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
