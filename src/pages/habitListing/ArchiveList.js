import React from 'react'
import ArchiveCard from '../../components/card/archiveCard/ArchiveCard'
import HabitNav from '../../components/HabitNavbar/HabitNav'
import Sidebar from '../../components/sidebar/Sidebar'
import './habit.css'
const ArchiveList = () => {
  return (
    <>
    <div className="habit-cont">
    <Sidebar/>
    <div className="habitside-sec">
        <HabitNav title={"Archive Section"}/>
        <ArchiveCard/>
    </div>
    </div>
    </>
  )
}

export default ArchiveList