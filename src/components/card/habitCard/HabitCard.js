import React from 'react'
import './habitCard.css'
const HabitCard = () => {
  return (
    <>
        <div className="habit-card-sec">
            <div className="card-profile">
            <img src="https://c.tenor.com/ZxaSEXL0wB4AAAAM/cartoon-monkey.gif" alt="profile" />
            </div>
            <div className="card-user-name">
            <span>Wake early</span>
            </div>
            <div className="card-btn-sec">
            <button>Add To Archive</button>
            <button>Add to Label</button>
            <button>Edit</button>
            </div>
        </div>
    </>
  )
}

export default HabitCard