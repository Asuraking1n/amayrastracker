import React from 'react'
import {useNavigate} from 'react-router-dom'
import HabitCard from '../../components/card/habitCard/HabitCard'
import HabitNav from '../../components/HabitNavbar/HabitNav'
import Sidebar from '../../components/sidebar/Sidebar'
import './habit.css'
const HabitList = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  return (
    <>
    <div className="habit-cont">
    <Sidebar/>
    <div className="habitside-sec">
        {token?<>
          <HabitNav title={"Habit Section"}/>
        <HabitCard/>
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

export default HabitList