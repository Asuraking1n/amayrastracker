import React from 'react'
import './habitnav.css'
const HabitNav = ({title}) => {
  return (
    <>
        <div className="habit-navbar-cont">
            <span>{title}</span>
            <div className="add-habit-btn">
                <button><span>+</span> <div>Add Habits</div></button>
            </div>
        </div>
    </>
  )
}

export default HabitNav