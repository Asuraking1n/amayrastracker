import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addhabit,addarchive } from '../../../redux/reducers/HabitSlice'
const ArchiveCard = (props) => {
  const dispatch = useDispatch()
  const token  = localStorage.getItem('token')
  
  const dltHabit=async()=>{
    const res = await axios.delete(`/api/archives/${props.data._id}`,{
        headers: {
            authorization: token 
        }
    })
    if(res.status===200){
      dispatch(addarchive(res.data.archives))
    }else{
        alert('error')
    }
}

const restoreHabit=async()=>{
  const res = await axios.post(`/api/archives/restore/${props.data._id}`,{},{
      headers: {
          authorization: token 
      }
  })
  if(res.status===200){
    dispatch(addarchive(res.data.archives))
    dispatch(addhabit(res.data.habits))
  }else{
      alert('error')
  }
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