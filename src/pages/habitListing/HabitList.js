import React from 'react'
import HabitNav from '../../components/HabitNavbar/HabitNav'
import Sidebar from '../../components/sidebar/Sidebar'
import './habit.css'
const HabitList = () => {
  return (
    <>
    <div className="habit-cont">
    <Sidebar/>
    <div className="habitside-sec">
        <HabitNav title={"Habit Section"}/>
    </div>
    </div>
    </>
  )
}

export default HabitList