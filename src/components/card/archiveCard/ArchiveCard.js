import React from 'react'
import axios from 'axios'
import { useHabit } from '../../../context/habit-context'
const ArchiveCard = (props) => {
  const {setArchiveDataSet,setHabitDataSet} = useHabit()
  const token  = localStorage.getItem('token')
  
  const dltHabit=async()=>{
    const res = await axios.delete(`/api/archives/${props.data._id}`,{
        headers: {
            authorization: token 
        }
    })
    if(res.status===200){
      setArchiveDataSet(res.data.archives);
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
    setArchiveDataSet(res.data.archives);
    setHabitDataSet(res.data.habits)
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
            <span>Wake early</span>
            </div>
            <div className="card-btn-sec">
            <button onClick={dltHabit}>Delete</button>
            <button onClick={restoreHabit}>Restore</button>
            <button>Add to Label</button>
            </div>
        </div>
    </>
  )
}

export default ArchiveCard