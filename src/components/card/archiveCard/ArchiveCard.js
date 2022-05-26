import React from 'react'
import { useDispatch } from 'react-redux'
import { dltFromArchive, reStoreFromArchive } from '../../../redux/reducers/HabitSlice'

const ArchiveCard = (props) => {
  const dispatch = useDispatch()

  


const dltHabit=()=>{
  dispatch(dltFromArchive(props.data._id))
  
}



const restoreHabit=()=>{
  dispatch(reStoreFromArchive(props.data._id))
}



  return (
    <>
        <div className="habit-card-sec">
            <div className="card-profile">
            <img src="https://c.tenor.com/ZxaSEXL0wB4AAAAM/cartoon-monkey.gif" alt="profile" />
            </div>
            <div className="card-user-name">
            <span>{props.data.name}</span>
            <span>{props.data.reminder}</span>
            </div>
            <div className="card-btn-sec">
            <button onClick={dltHabit}>Delete</button>
            <button onClick={restoreHabit}>Restore</button>
            </div>
        </div>
    </>
  )
}

export default ArchiveCard