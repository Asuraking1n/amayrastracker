import React from 'react'
import './sidebar.css'
import Habit from '../../images/habit.png'
import Archive from '../../images/archive.png'
import Label from '../../images/label.png'
import Logout from '../../images/logout.png'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate =  useNavigate()
  let token = localStorage.getItem('token')
  const logoMeOut=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <>
        <div className="sidebar-container">
            <div className="user-container">
            <img src="https://i.pinimg.com/originals/33/6b/a2/336ba227b99cac98bdc63718e8cb881a.gif" alt="hii" />
            <span>Climber</span>
            </div>

            <div className="sidebar-route">
                <span onClick={()=>navigate('/habit-listing')}>
                <img src={Habit} alt="icon" />
                <div>All Habits</div>
                </span>
                <span onClick={()=>navigate('/archive-listing')}>
                <img src={Archive } alt="icon" />
                <div>Archives</div>
                </span>
                <span onClick={()=>navigate('/label-listing')}>
                <img src={Label} alt="icon" />
                <div>Labels</div>
                </span>
                {token&&<span onClick={logoMeOut}>
                <img src={Logout} alt="icon" />
                <div>Logout</div>
                </span>}
                
            </div>
        </div>
    </>
  )
}

export default Sidebar