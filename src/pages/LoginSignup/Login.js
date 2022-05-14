import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate()
    const [userCred, setUserCred] = useState({
        email: '',
        pass: ''
    })
    const dummyUser = {
        email: "nishant@gmail.com",
        pass: "nishant"
    } 
    const notify = () => toast("Some Error Occured, refresh and retry");
    const addDummyUser = (e) => {
        e.preventDefault()
        setUserCred(dummyUser)
    }
    const dataHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUserCred({ ...userCred, [name]: value })
    }
    const logInUser = (e) => {
        e.preventDefault();
        axios.post('/api/auth/login', {
            email: userCred.email,
            password: userCred.pass
        })
            .then((res) => {
                localStorage.setItem('token', res.data.encodedToken)
                navigate('/habit-listing')
            })
            .catch((e) => notify())

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
                <div className="btn-cont">
                    <button onClick={addDummyUser}>Apply Dummy Data</button>
                    <button onClick={logInUser}>Let Me In</button>
                </div>
            </div>
        </>
    )
}

export default Login