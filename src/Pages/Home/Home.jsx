import React from 'react'
import './Home.css'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={()=>navigate('/login')}>Log Out</Button>
    </div>
  )
}

export default Home
