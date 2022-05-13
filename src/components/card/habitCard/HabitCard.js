import React, { useState } from 'react'
import axios from 'axios'
import './habitCard.css'
import EditModal from '../../moadal/EditModal'
import { useStopwatch } from 'react-timer-hook';
import { LineChart, Line } from "recharts";
import { useDispatch } from 'react-redux'
import { addhabit,addarchive } from '../../../redux/reducers/HabitSlice'
const HabitCard = (props) => {
  const [openModal, setOpenModal] = useState(false)
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()


  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
  const dataList = [
    {
      name: props.data.date,
      uv: 0,
      pv: 0,
      amt: 0
    },
    {
      name: props.data.date,
      uv: minutes,
      pv:minutes,
      amt: 10
    },
    {
      name: props.data.date,
      uv: seconds,
      pv: seconds,
      amt: 10
    },
  
  ];
  const addtoArchive = async (id, token) => {
    const res = await axios.post(`/api/archives/${id}`, {}, {
      headers: {
        authorization: token
      }
    })

    if (res.status === 201) {
      dispatch(addarchive(res.data.archives))
      dispatch(addhabit(res.data.habits))
    } else {
      alert('error')
    }
  }

  const dltHabit = async () => {
    const res = await axios.delete(`/api/habits/${props.data._id}`, {
      headers: {
        authorization: token
      }
    })
    if (res.status === 200) {
      dispatch(addhabit(res.data.habits))
    } else {
      alert('error')
    }
  }




  return (
    <>
      <div className="habit-cont-sec">
        <div className="habit-card-sec">
          <div className="card-profile">
            <img src="https://c.tenor.com/ZxaSEXL0wB4AAAAM/cartoon-monkey.gif" alt="profile" />
          </div>
          <div className="card-user-name">
            <span>{props.data.name}</span>
            <span>{props.data.date}</span>
          </div>
          <div className="card-btn-sec">
            <button onClick={() => addtoArchive(props.data._id, token)}>Add To Archive</button>
            <button onClick={dltHabit}>Delete</button>
            <button onClick={() => setOpenModal(true)}>Edit</button>
            {openModal && <EditModal IsopenModal={(openModal) => setOpenModal(openModal)} id={props.data._id} />}

          </div>
        </div>
        <div className="stats-cont">
        <div className='pomodoro'>
          <div className='pomodoro-timer'>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <p>{isRunning ? 'Running' : 'Not running'}</p>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
        </div>
        <span>STATS : </span>
        <LineChart width={300} height={100} data={dataList} style={{zIndex:"0"}}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
        </div>
      </div>
    </>
  )
}

export default HabitCard