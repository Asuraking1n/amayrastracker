import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../../images/logo.jpg'
import Cancel from '../../images/cancel.png'
import Hamburger from '../../images/hamburger-black.png'
const Navbar = () => {
    const [sidebar, setSidebar] = useState("")
    return (
        <>
            <div className="nav-container">
                <div className="nav-logo-container">
                    <img src={Logo} alt="logo" />
                    Tracker
                </div>
                <div className="nav-routes-container">
                    <Link to='/signup' id='link'> <span>Sign Up</span></Link>
                    <Link to='/login' id='link'> <span>Login</span></Link>
                    <img src={Hamburger} alt="hamburger" onClick={() => setSidebar('sidebar-active')} />
                </div>
                <div className={`sidebar-cont ${sidebar}`}>
                    <div className="cancel-icon">
                        <img src={Cancel} alt="cancel" onClick={() => setSidebar('')} />
                    </div>
                    <Link to='/signup' id='link'> <span>Sign Up</span></Link>
                    <Link to='/login' id='link'> <span>Login</span></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar