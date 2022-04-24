import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './login.css'
const Login = () => {
  return (
    <>
        <Navbar/>
        <div className="login-cont">
            <div className="name-cont">
                <input type="email" placeholder='Enter your Email'/>
            </div>
            <div className="name-cont">
                <input type="password" placeholder='Enter your Password'/>
            </div>
            <div className="btn-cont">
                <button>Let Me In</button>
            </div>
        </div>
    </>
  )
}

export default Login