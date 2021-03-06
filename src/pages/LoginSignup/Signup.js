import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const navigate = useNavigate()
    const [userCred, setUserCred] = useState({
        email: '',
        pass: '',
        cpass: ''
    })
    const notify = () => toast("password not matched");
    const notifyAPIerror = () => toast("Got Api Error");
    const dataHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUserCred({ ...userCred, [name]: value })
    }
    const logInUser = async (e) => {
        e.preventDefault()
        if (userCred.pass === userCred.cpass) {
            await axios.post('/api/auth/signup', {
                firstName: 'user',
                lastName: 'test',
                email: userCred.email,
                password: userCred.password
            })
                .then(res => {
                    localStorage.setItem('token', res.data.encodedToken)
                    navigate('/habit-listing')
                }).catch((e) => notifyAPIerror() )
        } else {
            notify()
        }
    }
    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="login-cont">

                <div className="name-cont">
                    <input type="email" placeholder='Enter your Email' value={userCred.email} name='email' onChange={dataHandler} />
                </div>
                <div className="name-cont">
                    <input type="password" placeholder='Enter your Password' value={userCred.pass} name='pass' onChange={dataHandler} />
                </div>
                <div className="name-cont">
                    <input type="password" placeholder='Enter your Password' value={userCred.cpass} name='cpass' onChange={dataHandler} />
                </div>
                <div className="btn-cont">
                    <button onClick={logInUser}>Sign Me Up</button>
                </div>
            </div>
        </>
    )
}

export default Signup