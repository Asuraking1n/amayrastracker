import React from 'react'
import {useNavigate} from 'react-router-dom'
import LabelCard from '../../components/card/labelCard/LabelCard'
import HabitNav from '../../components/HabitNavbar/HabitNav'
import Sidebar from '../../components/sidebar/Sidebar'
import './habit.css'
const LabelList = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  return (
    <>
    <div className="habit-cont">
    <Sidebar/>
    <div className="habitside-sec">
        
        {token?<>
          <HabitNav title={"Label Section"}/>
        <LabelCard/>
        </>:
        <div className='blank-div'>
          <img src="https://i.pinimg.com/originals/58/22/46/58224674a4868f695d1f0e4ff61bf959.gif" alt="login" />
          <span onClick={()=>navigate('/login')}>Please Click To Login</span>
        </div>
        }
    </div>
    </div>
    </>
  )
}

export default LabelList