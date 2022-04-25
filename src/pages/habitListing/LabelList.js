import React from 'react'
import LabelCard from '../../components/card/labelCard/LabelCard'
import HabitNav from '../../components/HabitNavbar/HabitNav'
import Sidebar from '../../components/sidebar/Sidebar'
import './habit.css'
const LabelList = () => {
  return (
    <>
    <div className="habit-cont">
    <Sidebar/>
    <div className="habitside-sec">
        <HabitNav title={"Label Section"}/>
        <LabelCard/>
    </div>
    </div>
    </>
  )
}

export default LabelList