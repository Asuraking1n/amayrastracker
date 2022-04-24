import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './login.css'
const Signup = () => {
  return (
    <>
        <Navbar/>
        <div className="login-cont">
        <div className="name-cont">
                <input type="text" placeholder='Enter your First Name'/>
            </div>
            <div className="name-cont">
                <input type="text" placeholder='Enter your Last Name'/>
            </div>
            <div className="name-cont">
                <input type="email" placeholder='Enter your Email'/>
            </div>
            <div className="name-cont">
                <input type="password" placeholder='Enter your Password'/>
            </div>
            <div className="btn-cont">
                <button>Sign Me Up</button>
            </div>
        </div>
    </>
  )
}

export default Signup